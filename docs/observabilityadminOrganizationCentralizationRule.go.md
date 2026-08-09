# `observabilityadminOrganizationCentralizationRule` Submodule <a name="`observabilityadminOrganizationCentralizationRule` Submodule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminOrganizationCentralizationRule <a name="ObservabilityadminOrganizationCentralizationRule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule awscc_observabilityadmin_organization_centralization_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRule(scope Construct, id *string, config ObservabilityadminOrganizationCentralizationRuleConfig) ObservabilityadminOrganizationCentralizationRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig">ObservabilityadminOrganizationCentralizationRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig">ObservabilityadminOrganizationCentralizationRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putRule"></a>

```go
func PutRule(value ObservabilityadminOrganizationCentralizationRuleRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule">ObservabilityadminOrganizationCentralizationRuleRule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminOrganizationCentralizationRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRule_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ObservabilityadminOrganizationCentralizationRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObservabilityadminOrganizationCentralizationRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObservabilityadminOrganizationCentralizationRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminOrganizationCentralizationRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleArn">RuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList">ObservabilityadminOrganizationCentralizationRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.rule"></a>

```go
func Rule() ObservabilityadminOrganizationCentralizationRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleOutputReference</a>

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleArn"></a>

```go
func RuleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tags"></a>

```go
func Tags() ObservabilityadminOrganizationCentralizationRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList">ObservabilityadminOrganizationCentralizationRuleTagsList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminOrganizationCentralizationRuleConfig <a name="ObservabilityadminOrganizationCentralizationRuleConfig" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Rule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule,
	RuleName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule">ObservabilityadminOrganizationCentralizationRuleRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#rule ObservabilityadminOrganizationCentralizationRule#rule}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.ruleName">RuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#rule_name ObservabilityadminOrganizationCentralizationRule#rule_name}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.rule"></a>

```go
Rule ObservabilityadminOrganizationCentralizationRuleRule
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule">ObservabilityadminOrganizationCentralizationRuleRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#rule ObservabilityadminOrganizationCentralizationRule#rule}.

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#rule_name ObservabilityadminOrganizationCentralizationRule#rule_name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#tags ObservabilityadminOrganizationCentralizationRule#tags}

---

### ObservabilityadminOrganizationCentralizationRuleRule <a name="ObservabilityadminOrganizationCentralizationRuleRule" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleRule {
	Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination,
	Source: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination">ObservabilityadminOrganizationCentralizationRuleRuleDestination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#destination ObservabilityadminOrganizationCentralizationRule#destination}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource">ObservabilityadminOrganizationCentralizationRuleRuleSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#source ObservabilityadminOrganizationCentralizationRule#source}. |

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule.property.destination"></a>

```go
Destination ObservabilityadminOrganizationCentralizationRuleRuleDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination">ObservabilityadminOrganizationCentralizationRuleRuleDestination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#destination ObservabilityadminOrganizationCentralizationRule#destination}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRule.property.source"></a>

```go
Source ObservabilityadminOrganizationCentralizationRuleRuleSource
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource">ObservabilityadminOrganizationCentralizationRuleRuleSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#source ObservabilityadminOrganizationCentralizationRule#source}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestination <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestination" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleRuleDestination {
	Region: *string,
	Account: *string,
	DestinationLogsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration,
	DestinationMetricsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.account">Account</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#account ObservabilityadminOrganizationCentralizationRule#account}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.destinationLogsConfiguration">DestinationLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_logs_configuration ObservabilityadminOrganizationCentralizationRule#destination_logs_configuration}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.destinationMetricsConfiguration">DestinationMetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_metrics_configuration ObservabilityadminOrganizationCentralizationRule#destination_metrics_configuration}. |

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}.

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.account"></a>

```go
Account *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#account ObservabilityadminOrganizationCentralizationRule#account}.

---

##### `DestinationLogsConfiguration`<sup>Optional</sup> <a name="DestinationLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.destinationLogsConfiguration"></a>

```go
DestinationLogsConfiguration ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_logs_configuration ObservabilityadminOrganizationCentralizationRule#destination_logs_configuration}.

---

##### `DestinationMetricsConfiguration`<sup>Optional</sup> <a name="DestinationMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination.property.destinationMetricsConfiguration"></a>

```go
DestinationMetricsConfiguration ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#destination_metrics_configuration ObservabilityadminOrganizationCentralizationRule#destination_metrics_configuration}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration {
	BackupConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration,
	LogGroupNameConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration,
	LogsEncryptionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration ObservabilityadminOrganizationCentralizationRule#backup_configuration}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.logGroupNameConfiguration">LogGroupNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_configuration ObservabilityadminOrganizationCentralizationRule#log_group_name_configuration}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.logsEncryptionConfiguration">LogsEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#logs_encryption_configuration ObservabilityadminOrganizationCentralizationRule#logs_encryption_configuration}. |

---

##### `BackupConfiguration`<sup>Optional</sup> <a name="BackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.backupConfiguration"></a>

```go
BackupConfiguration ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration ObservabilityadminOrganizationCentralizationRule#backup_configuration}.

---

##### `LogGroupNameConfiguration`<sup>Optional</sup> <a name="LogGroupNameConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.logGroupNameConfiguration"></a>

```go
LogGroupNameConfiguration ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_configuration ObservabilityadminOrganizationCentralizationRule#log_group_name_configuration}.

---

##### `LogsEncryptionConfiguration`<sup>Optional</sup> <a name="LogsEncryptionConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration.property.logsEncryptionConfiguration"></a>

```go
LogsEncryptionConfiguration ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#logs_encryption_configuration ObservabilityadminOrganizationCentralizationRule#logs_encryption_configuration}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration {
	KmsKeyArn: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn ObservabilityadminOrganizationCentralizationRule#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn ObservabilityadminOrganizationCentralizationRule#kms_key_arn}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration {
	LogGroupNamePattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration.property.logGroupNamePattern">LogGroupNamePattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_pattern ObservabilityadminOrganizationCentralizationRule#log_group_name_pattern}. |

---

##### `LogGroupNamePattern`<sup>Optional</sup> <a name="LogGroupNamePattern" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration.property.logGroupNamePattern"></a>

```go
LogGroupNamePattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_name_pattern ObservabilityadminOrganizationCentralizationRule#log_group_name_pattern}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration {
	EncryptionConflictResolutionStrategy: *string,
	EncryptionStrategy: *string,
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.encryptionConflictResolutionStrategy">EncryptionConflictResolutionStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_conflict_resolution_strategy ObservabilityadminOrganizationCentralizationRule#encryption_conflict_resolution_strategy}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.encryptionStrategy">EncryptionStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_strategy ObservabilityadminOrganizationCentralizationRule#encryption_strategy}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn ObservabilityadminOrganizationCentralizationRule#kms_key_arn}. |

---

##### `EncryptionConflictResolutionStrategy`<sup>Optional</sup> <a name="EncryptionConflictResolutionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.encryptionConflictResolutionStrategy"></a>

```go
EncryptionConflictResolutionStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_conflict_resolution_strategy ObservabilityadminOrganizationCentralizationRule#encryption_conflict_resolution_strategy}.

---

##### `EncryptionStrategy`<sup>Optional</sup> <a name="EncryptionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.encryptionStrategy"></a>

```go
EncryptionStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#encryption_strategy ObservabilityadminOrganizationCentralizationRule#encryption_strategy}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#kms_key_arn ObservabilityadminOrganizationCentralizationRule#kms_key_arn}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration {
	BackupConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration ObservabilityadminOrganizationCentralizationRule#backup_configuration}. |

---

##### `BackupConfiguration`<sup>Optional</sup> <a name="BackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration.property.backupConfiguration"></a>

```go
BackupConfiguration ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#backup_configuration ObservabilityadminOrganizationCentralizationRule#backup_configuration}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration {
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}. |

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#region ObservabilityadminOrganizationCentralizationRule#region}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleSource <a name="ObservabilityadminOrganizationCentralizationRuleRuleSource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleRuleSource {
	Regions: *[]*string,
	Scope: *string,
	SourceLogsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration,
	SourceMetricsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#regions ObservabilityadminOrganizationCentralizationRule#regions}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.scope">Scope</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#scope ObservabilityadminOrganizationCentralizationRule#scope}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.sourceLogsConfiguration">SourceLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#source_logs_configuration ObservabilityadminOrganizationCentralizationRule#source_logs_configuration}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.sourceMetricsConfiguration">SourceMetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#source_metrics_configuration ObservabilityadminOrganizationCentralizationRule#source_metrics_configuration}. |

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#regions ObservabilityadminOrganizationCentralizationRule#regions}.

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#scope ObservabilityadminOrganizationCentralizationRule#scope}.

---

##### `SourceLogsConfiguration`<sup>Optional</sup> <a name="SourceLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.sourceLogsConfiguration"></a>

```go
SourceLogsConfiguration ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#source_logs_configuration ObservabilityadminOrganizationCentralizationRule#source_logs_configuration}.

---

##### `SourceMetricsConfiguration`<sup>Optional</sup> <a name="SourceMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource.property.sourceMetricsConfiguration"></a>

```go
SourceMetricsConfiguration ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#source_metrics_configuration ObservabilityadminOrganizationCentralizationRule#source_metrics_configuration}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration {
	DataSourceSelectionCriteria: *string,
	EncryptedLogGroupStrategy: *string,
	LogGroupSelectionCriteria: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.dataSourceSelectionCriteria">DataSourceSelectionCriteria</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#data_source_selection_criteria ObservabilityadminOrganizationCentralizationRule#data_source_selection_criteria}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.encryptedLogGroupStrategy">EncryptedLogGroupStrategy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#encrypted_log_group_strategy ObservabilityadminOrganizationCentralizationRule#encrypted_log_group_strategy}. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.logGroupSelectionCriteria">LogGroupSelectionCriteria</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_selection_criteria ObservabilityadminOrganizationCentralizationRule#log_group_selection_criteria}. |

---

##### `DataSourceSelectionCriteria`<sup>Optional</sup> <a name="DataSourceSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.dataSourceSelectionCriteria"></a>

```go
DataSourceSelectionCriteria *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#data_source_selection_criteria ObservabilityadminOrganizationCentralizationRule#data_source_selection_criteria}.

---

##### `EncryptedLogGroupStrategy`<sup>Optional</sup> <a name="EncryptedLogGroupStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.encryptedLogGroupStrategy"></a>

```go
EncryptedLogGroupStrategy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#encrypted_log_group_strategy ObservabilityadminOrganizationCentralizationRule#encrypted_log_group_strategy}.

---

##### `LogGroupSelectionCriteria`<sup>Optional</sup> <a name="LogGroupSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration.property.logGroupSelectionCriteria"></a>

```go
LogGroupSelectionCriteria *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#log_group_selection_criteria ObservabilityadminOrganizationCentralizationRule#log_group_selection_criteria}.

---

### ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration <a name="ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration {
	MetricsSelectionCriteria: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration.property.metricsSelectionCriteria">MetricsSelectionCriteria</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#metrics_selection_criteria ObservabilityadminOrganizationCentralizationRule#metrics_selection_criteria}. |

---

##### `MetricsSelectionCriteria`<sup>Optional</sup> <a name="MetricsSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration.property.metricsSelectionCriteria"></a>

```go
MetricsSelectionCriteria *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#metrics_selection_criteria ObservabilityadminOrganizationCentralizationRule#metrics_selection_criteria}.

---

### ObservabilityadminOrganizationCentralizationRuleTags <a name="ObservabilityadminOrganizationCentralizationRuleTags" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

&observabilityadminorganizationcentralizationrule.ObservabilityadminOrganizationCentralizationRuleTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#key ObservabilityadminOrganizationCentralizationRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/observabilityadmin_organization_centralization_rule#value ObservabilityadminOrganizationCentralizationRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resetLogGroupNamePattern">ResetLogGroupNamePattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogGroupNamePattern` <a name="ResetLogGroupNamePattern" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.resetLogGroupNamePattern"></a>

```go
func ResetLogGroupNamePattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.logGroupNamePatternInput">LogGroupNamePatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.logGroupNamePattern">LogGroupNamePattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogGroupNamePatternInput`<sup>Optional</sup> <a name="LogGroupNamePatternInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.logGroupNamePatternInput"></a>

```go
func LogGroupNamePatternInput() *string
```

- *Type:* *string

---

##### `LogGroupNamePattern`<sup>Required</sup> <a name="LogGroupNamePattern" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.logGroupNamePattern"></a>

```go
func LogGroupNamePattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetEncryptionConflictResolutionStrategy">ResetEncryptionConflictResolutionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetEncryptionStrategy">ResetEncryptionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncryptionConflictResolutionStrategy` <a name="ResetEncryptionConflictResolutionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetEncryptionConflictResolutionStrategy"></a>

```go
func ResetEncryptionConflictResolutionStrategy()
```

##### `ResetEncryptionStrategy` <a name="ResetEncryptionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetEncryptionStrategy"></a>

```go
func ResetEncryptionStrategy()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionConflictResolutionStrategyInput">EncryptionConflictResolutionStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionStrategyInput">EncryptionStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionConflictResolutionStrategy">EncryptionConflictResolutionStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionStrategy">EncryptionStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionConflictResolutionStrategyInput`<sup>Optional</sup> <a name="EncryptionConflictResolutionStrategyInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionConflictResolutionStrategyInput"></a>

```go
func EncryptionConflictResolutionStrategyInput() *string
```

- *Type:* *string

---

##### `EncryptionStrategyInput`<sup>Optional</sup> <a name="EncryptionStrategyInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionStrategyInput"></a>

```go
func EncryptionStrategyInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `EncryptionConflictResolutionStrategy`<sup>Required</sup> <a name="EncryptionConflictResolutionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionConflictResolutionStrategy"></a>

```go
func EncryptionConflictResolutionStrategy() *string
```

- *Type:* *string

---

##### `EncryptionStrategy`<sup>Required</sup> <a name="EncryptionStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.encryptionStrategy"></a>

```go
func EncryptionStrategy() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putBackupConfiguration">PutBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogGroupNameConfiguration">PutLogGroupNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogsEncryptionConfiguration">PutLogsEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetBackupConfiguration">ResetBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetLogGroupNameConfiguration">ResetLogGroupNameConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetLogsEncryptionConfiguration">ResetLogsEncryptionConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupConfiguration` <a name="PutBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putBackupConfiguration"></a>

```go
func PutBackupConfiguration(value ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putBackupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfiguration</a>

---

##### `PutLogGroupNameConfiguration` <a name="PutLogGroupNameConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogGroupNameConfiguration"></a>

```go
func PutLogGroupNameConfiguration(value ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogGroupNameConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfiguration</a>

---

##### `PutLogsEncryptionConfiguration` <a name="PutLogsEncryptionConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogsEncryptionConfiguration"></a>

```go
func PutLogsEncryptionConfiguration(value ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.putLogsEncryptionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfiguration</a>

---

##### `ResetBackupConfiguration` <a name="ResetBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetBackupConfiguration"></a>

```go
func ResetBackupConfiguration()
```

##### `ResetLogGroupNameConfiguration` <a name="ResetLogGroupNameConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetLogGroupNameConfiguration"></a>

```go
func ResetLogGroupNameConfiguration()
```

##### `ResetLogsEncryptionConfiguration` <a name="ResetLogsEncryptionConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.resetLogsEncryptionConfiguration"></a>

```go
func ResetLogsEncryptionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logGroupNameConfiguration">LogGroupNameConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logsEncryptionConfiguration">LogsEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.backupConfigurationInput">BackupConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logGroupNameConfigurationInput">LogGroupNameConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logsEncryptionConfigurationInput">LogsEncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupConfiguration`<sup>Required</sup> <a name="BackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.backupConfiguration"></a>

```go
func BackupConfiguration() ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationBackupConfigurationOutputReference</a>

---

##### `LogGroupNameConfiguration`<sup>Required</sup> <a name="LogGroupNameConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logGroupNameConfiguration"></a>

```go
func LogGroupNameConfiguration() ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogGroupNameConfigurationOutputReference</a>

---

##### `LogsEncryptionConfiguration`<sup>Required</sup> <a name="LogsEncryptionConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logsEncryptionConfiguration"></a>

```go
func LogsEncryptionConfiguration() ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationLogsEncryptionConfigurationOutputReference</a>

---

##### `BackupConfigurationInput`<sup>Optional</sup> <a name="BackupConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.backupConfigurationInput"></a>

```go
func BackupConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `LogGroupNameConfigurationInput`<sup>Optional</sup> <a name="LogGroupNameConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logGroupNameConfigurationInput"></a>

```go
func LogGroupNameConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `LogsEncryptionConfigurationInput`<sup>Optional</sup> <a name="LogsEncryptionConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.logsEncryptionConfigurationInput"></a>

```go
func LogsEncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.resetRegion"></a>

```go
func ResetRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.putBackupConfiguration">PutBackupConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resetBackupConfiguration">ResetBackupConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBackupConfiguration` <a name="PutBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.putBackupConfiguration"></a>

```go
func PutBackupConfiguration(value ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.putBackupConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfiguration</a>

---

##### `ResetBackupConfiguration` <a name="ResetBackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.resetBackupConfiguration"></a>

```go
func ResetBackupConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.backupConfiguration">BackupConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.backupConfigurationInput">BackupConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupConfiguration`<sup>Required</sup> <a name="BackupConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.backupConfiguration"></a>

```go
func BackupConfiguration() ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationBackupConfigurationOutputReference</a>

---

##### `BackupConfigurationInput`<sup>Optional</sup> <a name="BackupConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.backupConfigurationInput"></a>

```go
func BackupConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationLogsConfiguration">PutDestinationLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationMetricsConfiguration">PutDestinationMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetDestinationLogsConfiguration">ResetDestinationLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetDestinationMetricsConfiguration">ResetDestinationMetricsConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationLogsConfiguration` <a name="PutDestinationLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationLogsConfiguration"></a>

```go
func PutDestinationLogsConfiguration(value ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfiguration</a>

---

##### `PutDestinationMetricsConfiguration` <a name="PutDestinationMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationMetricsConfiguration"></a>

```go
func PutDestinationMetricsConfiguration(value ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.putDestinationMetricsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfiguration</a>

---

##### `ResetAccount` <a name="ResetAccount" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetDestinationLogsConfiguration` <a name="ResetDestinationLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetDestinationLogsConfiguration"></a>

```go
func ResetDestinationLogsConfiguration()
```

##### `ResetDestinationMetricsConfiguration` <a name="ResetDestinationMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.resetDestinationMetricsConfiguration"></a>

```go
func ResetDestinationMetricsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationLogsConfiguration">DestinationLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationMetricsConfiguration">DestinationMetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.accountInput">AccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationLogsConfigurationInput">DestinationLogsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationMetricsConfigurationInput">DestinationMetricsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.account">Account</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationLogsConfiguration`<sup>Required</sup> <a name="DestinationLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationLogsConfiguration"></a>

```go
func DestinationLogsConfiguration() ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationLogsConfigurationOutputReference</a>

---

##### `DestinationMetricsConfiguration`<sup>Required</sup> <a name="DestinationMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationMetricsConfiguration"></a>

```go
func DestinationMetricsConfiguration() ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationDestinationMetricsConfigurationOutputReference</a>

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.accountInput"></a>

```go
func AccountInput() *string
```

- *Type:* *string

---

##### `DestinationLogsConfigurationInput`<sup>Optional</sup> <a name="DestinationLogsConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationLogsConfigurationInput"></a>

```go
func DestinationLogsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationMetricsConfigurationInput`<sup>Optional</sup> <a name="DestinationMetricsConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.destinationMetricsConfigurationInput"></a>

```go
func DestinationMetricsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.account"></a>

```go
func Account() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleRuleOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationCentralizationRuleRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putSource">PutSource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putDestination"></a>

```go
func PutDestination(value ObservabilityadminOrganizationCentralizationRuleRuleDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestination">ObservabilityadminOrganizationCentralizationRuleRuleDestination</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putSource"></a>

```go
func PutSource(value ObservabilityadminOrganizationCentralizationRuleRuleSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSource">ObservabilityadminOrganizationCentralizationRuleRuleSource</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.destination"></a>

```go
func Destination() ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleDestinationOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.source"></a>

```go
func Source() ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceLogsConfiguration">PutSourceLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceMetricsConfiguration">PutSourceMetricsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetSourceLogsConfiguration">ResetSourceLogsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetSourceMetricsConfiguration">ResetSourceMetricsConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSourceLogsConfiguration` <a name="PutSourceLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceLogsConfiguration"></a>

```go
func PutSourceLogsConfiguration(value ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceLogsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfiguration</a>

---

##### `PutSourceMetricsConfiguration` <a name="PutSourceMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceMetricsConfiguration"></a>

```go
func PutSourceMetricsConfiguration(value ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.putSourceMetricsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfiguration</a>

---

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSourceLogsConfiguration` <a name="ResetSourceLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetSourceLogsConfiguration"></a>

```go
func ResetSourceLogsConfiguration()
```

##### `ResetSourceMetricsConfiguration` <a name="ResetSourceMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.resetSourceMetricsConfiguration"></a>

```go
func ResetSourceMetricsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceLogsConfiguration">SourceLogsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceMetricsConfiguration">SourceMetricsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceLogsConfigurationInput">SourceLogsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceMetricsConfigurationInput">SourceMetricsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SourceLogsConfiguration`<sup>Required</sup> <a name="SourceLogsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceLogsConfiguration"></a>

```go
func SourceLogsConfiguration() ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference</a>

---

##### `SourceMetricsConfiguration`<sup>Required</sup> <a name="SourceMetricsConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceMetricsConfiguration"></a>

```go
func SourceMetricsConfiguration() ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference">ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference</a>

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SourceLogsConfigurationInput`<sup>Optional</sup> <a name="SourceLogsConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceLogsConfigurationInput"></a>

```go
func SourceLogsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SourceMetricsConfigurationInput`<sup>Optional</sup> <a name="SourceMetricsConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.sourceMetricsConfigurationInput"></a>

```go
func SourceMetricsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetDataSourceSelectionCriteria">ResetDataSourceSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetEncryptedLogGroupStrategy">ResetEncryptedLogGroupStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetLogGroupSelectionCriteria">ResetLogGroupSelectionCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataSourceSelectionCriteria` <a name="ResetDataSourceSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetDataSourceSelectionCriteria"></a>

```go
func ResetDataSourceSelectionCriteria()
```

##### `ResetEncryptedLogGroupStrategy` <a name="ResetEncryptedLogGroupStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetEncryptedLogGroupStrategy"></a>

```go
func ResetEncryptedLogGroupStrategy()
```

##### `ResetLogGroupSelectionCriteria` <a name="ResetLogGroupSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.resetLogGroupSelectionCriteria"></a>

```go
func ResetLogGroupSelectionCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.dataSourceSelectionCriteriaInput">DataSourceSelectionCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.encryptedLogGroupStrategyInput">EncryptedLogGroupStrategyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.logGroupSelectionCriteriaInput">LogGroupSelectionCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.dataSourceSelectionCriteria">DataSourceSelectionCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.encryptedLogGroupStrategy">EncryptedLogGroupStrategy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.logGroupSelectionCriteria">LogGroupSelectionCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceSelectionCriteriaInput`<sup>Optional</sup> <a name="DataSourceSelectionCriteriaInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.dataSourceSelectionCriteriaInput"></a>

```go
func DataSourceSelectionCriteriaInput() *string
```

- *Type:* *string

---

##### `EncryptedLogGroupStrategyInput`<sup>Optional</sup> <a name="EncryptedLogGroupStrategyInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.encryptedLogGroupStrategyInput"></a>

```go
func EncryptedLogGroupStrategyInput() *string
```

- *Type:* *string

---

##### `LogGroupSelectionCriteriaInput`<sup>Optional</sup> <a name="LogGroupSelectionCriteriaInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.logGroupSelectionCriteriaInput"></a>

```go
func LogGroupSelectionCriteriaInput() *string
```

- *Type:* *string

---

##### `DataSourceSelectionCriteria`<sup>Required</sup> <a name="DataSourceSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.dataSourceSelectionCriteria"></a>

```go
func DataSourceSelectionCriteria() *string
```

- *Type:* *string

---

##### `EncryptedLogGroupStrategy`<sup>Required</sup> <a name="EncryptedLogGroupStrategy" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.encryptedLogGroupStrategy"></a>

```go
func EncryptedLogGroupStrategy() *string
```

- *Type:* *string

---

##### `LogGroupSelectionCriteria`<sup>Required</sup> <a name="LogGroupSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.logGroupSelectionCriteria"></a>

```go
func LogGroupSelectionCriteria() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceLogsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resetMetricsSelectionCriteria">ResetMetricsSelectionCriteria</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetricsSelectionCriteria` <a name="ResetMetricsSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.resetMetricsSelectionCriteria"></a>

```go
func ResetMetricsSelectionCriteria()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.metricsSelectionCriteriaInput">MetricsSelectionCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.metricsSelectionCriteria">MetricsSelectionCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MetricsSelectionCriteriaInput`<sup>Optional</sup> <a name="MetricsSelectionCriteriaInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.metricsSelectionCriteriaInput"></a>

```go
func MetricsSelectionCriteriaInput() *string
```

- *Type:* *string

---

##### `MetricsSelectionCriteria`<sup>Required</sup> <a name="MetricsSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.metricsSelectionCriteria"></a>

```go
func MetricsSelectionCriteria() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleRuleSourceSourceMetricsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleTagsList <a name="ObservabilityadminOrganizationCentralizationRuleTagsList" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityadminOrganizationCentralizationRuleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.get"></a>

```go
func Get(index *f64) ObservabilityadminOrganizationCentralizationRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationCentralizationRuleTagsOutputReference <a name="ObservabilityadminOrganizationCentralizationRuleTagsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationcentralizationrule"

observabilityadminorganizationcentralizationrule.NewObservabilityadminOrganizationCentralizationRuleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityadminOrganizationCentralizationRuleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationCentralizationRule.ObservabilityadminOrganizationCentralizationRuleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



