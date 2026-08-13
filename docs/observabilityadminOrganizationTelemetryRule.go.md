# `observabilityadminOrganizationTelemetryRule` Submodule <a name="`observabilityadminOrganizationTelemetryRule` Submodule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObservabilityadminOrganizationTelemetryRule <a name="ObservabilityadminOrganizationTelemetryRule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule awscc_observabilityadmin_organization_telemetry_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRule(scope Construct, id *string, config ObservabilityadminOrganizationTelemetryRuleConfig) ObservabilityadminOrganizationTelemetryRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig">ObservabilityadminOrganizationTelemetryRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig">ObservabilityadminOrganizationTelemetryRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putRule">PutRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRule` <a name="PutRule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putRule"></a>

```go
func PutRule(value ObservabilityadminOrganizationTelemetryRuleRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule">ObservabilityadminOrganizationTelemetryRuleRule</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ObservabilityadminOrganizationTelemetryRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ObservabilityadminOrganizationTelemetryRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObservabilityadminOrganizationTelemetryRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObservabilityadminOrganizationTelemetryRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ObservabilityadminOrganizationTelemetryRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.regionStatuses">RegionStatuses</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList">ObservabilityadminOrganizationTelemetryRuleRegionStatusesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleArn">RuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList">ObservabilityadminOrganizationTelemetryRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleInput">RuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RegionStatuses`<sup>Required</sup> <a name="RegionStatuses" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.regionStatuses"></a>

```go
func RegionStatuses() ObservabilityadminOrganizationTelemetryRuleRegionStatusesList
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList">ObservabilityadminOrganizationTelemetryRuleRegionStatusesList</a>

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.rule"></a>

```go
func Rule() ObservabilityadminOrganizationTelemetryRuleRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleOutputReference</a>

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleArn"></a>

```go
func RuleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tags"></a>

```go
func Tags() ObservabilityadminOrganizationTelemetryRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList">ObservabilityadminOrganizationTelemetryRuleTagsList</a>

---

##### `RuleInput`<sup>Optional</sup> <a name="RuleInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleInput"></a>

```go
func RuleInput() interface{}
```

- *Type:* interface{}

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObservabilityadminOrganizationTelemetryRuleConfig <a name="ObservabilityadminOrganizationTelemetryRuleConfig" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Rule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule,
	RuleName: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.rule">Rule</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule">ObservabilityadminOrganizationTelemetryRuleRule</a></code> | The telemetry rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.ruleName">RuleName</a></code> | <code>*string</code> | The name of the organization telemetry rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Rule`<sup>Required</sup> <a name="Rule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.rule"></a>

```go
Rule ObservabilityadminOrganizationTelemetryRuleRule
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule">ObservabilityadminOrganizationTelemetryRuleRule</a>

The telemetry rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#rule ObservabilityadminOrganizationTelemetryRule#rule}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

The name of the organization telemetry rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#rule_name ObservabilityadminOrganizationTelemetryRule#rule_name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#tags ObservabilityadminOrganizationTelemetryRule#tags}

---

### ObservabilityadminOrganizationTelemetryRuleRegionStatuses <a name="ObservabilityadminOrganizationTelemetryRuleRegionStatuses" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatuses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatuses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRegionStatuses {

}
```


### ObservabilityadminOrganizationTelemetryRuleRule <a name="ObservabilityadminOrganizationTelemetryRuleRule" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRule {
	ResourceType: *string,
	TelemetryType: *string,
	AllowFieldUpdates: interface{},
	AllRegions: interface{},
	DestinationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration,
	Regions: *[]*string,
	Scope: *string,
	SelectionCriteria: *string,
	TelemetrySourceTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.resourceType">ResourceType</a></code> | <code>*string</code> | Resource Type associated with the Organization Telemetry Rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.telemetryType">TelemetryType</a></code> | <code>*string</code> | Telemetry Type associated with the Organization Telemetry Rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.allowFieldUpdates">AllowFieldUpdates</a></code> | <code>interface{}</code> | When true, configuration drift in managed telemetry resources will be detected and remediated for resource-level fields. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.allRegions">AllRegions</a></code> | <code>interface{}</code> | When true, the rule is replicated to all supported regions. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration</a></code> | The destination configuration for telemetry data. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.regions">Regions</a></code> | <code>*[]*string</code> | List of AWS region codes where the rule should be replicated. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.scope">Scope</a></code> | <code>*string</code> | Selection Criteria on scope level for rule application. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.selectionCriteria">SelectionCriteria</a></code> | <code>*string</code> | Selection Criteria on resource level for rule application. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.telemetrySourceTypes">TelemetrySourceTypes</a></code> | <code>*[]*string</code> | The telemetry source types for a telemetry rule. |

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Resource Type associated with the Organization Telemetry Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#resource_type ObservabilityadminOrganizationTelemetryRule#resource_type}

---

##### `TelemetryType`<sup>Required</sup> <a name="TelemetryType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.telemetryType"></a>

```go
TelemetryType *string
```

- *Type:* *string

Telemetry Type associated with the Organization Telemetry Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#telemetry_type ObservabilityadminOrganizationTelemetryRule#telemetry_type}

---

##### `AllowFieldUpdates`<sup>Optional</sup> <a name="AllowFieldUpdates" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.allowFieldUpdates"></a>

```go
AllowFieldUpdates interface{}
```

- *Type:* interface{}

When true, configuration drift in managed telemetry resources will be detected and remediated for resource-level fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#allow_field_updates ObservabilityadminOrganizationTelemetryRule#allow_field_updates}

---

##### `AllRegions`<sup>Optional</sup> <a name="AllRegions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.allRegions"></a>

```go
AllRegions interface{}
```

- *Type:* interface{}

When true, the rule is replicated to all supported regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#all_regions ObservabilityadminOrganizationTelemetryRule#all_regions}

---

##### `DestinationConfiguration`<sup>Optional</sup> <a name="DestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.destinationConfiguration"></a>

```go
DestinationConfiguration ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration</a>

The destination configuration for telemetry data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#destination_configuration ObservabilityadminOrganizationTelemetryRule#destination_configuration}

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

List of AWS region codes where the rule should be replicated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#regions ObservabilityadminOrganizationTelemetryRule#regions}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Selection Criteria on scope level for rule application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#scope ObservabilityadminOrganizationTelemetryRule#scope}

---

##### `SelectionCriteria`<sup>Optional</sup> <a name="SelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.selectionCriteria"></a>

```go
SelectionCriteria *string
```

- *Type:* *string

Selection Criteria on resource level for rule application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#selection_criteria ObservabilityadminOrganizationTelemetryRule#selection_criteria}

---

##### `TelemetrySourceTypes`<sup>Optional</sup> <a name="TelemetrySourceTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRule.property.telemetrySourceTypes"></a>

```go
TelemetrySourceTypes *[]*string
```

- *Type:* *[]*string

The telemetry source types for a telemetry rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#telemetry_source_types ObservabilityadminOrganizationTelemetryRule#telemetry_source_types}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration {
	CloudtrailParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters,
	DestinationPattern: *string,
	DestinationType: *string,
	ElbLoadBalancerLoggingParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters,
	LogDeliveryParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters,
	RetentionInDays: *f64,
	VpcFlowLogParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters,
	WafLoggingParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.cloudtrailParameters">CloudtrailParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a></code> | Telemetry parameters for Cloudtrail. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.destinationPattern">DestinationPattern</a></code> | <code>*string</code> | Pattern for telemetry data destination. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.destinationType">DestinationType</a></code> | <code>*string</code> | Type of telemetry destination. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.elbLoadBalancerLoggingParameters">ElbLoadBalancerLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a></code> | Telemetry parameters for ELB/NLB Load Balancer Logs. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.logDeliveryParameters">LogDeliveryParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a></code> | Parameters for log delivery configuration. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | Number of days to retain the telemetry data in the specified destination. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.vpcFlowLogParameters">VpcFlowLogParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a></code> | Telemetry parameters for VPC Flow logs. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.wafLoggingParameters">WafLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a></code> | Telemetry parameters for WAF v2 Web ACL. |

---

##### `CloudtrailParameters`<sup>Optional</sup> <a name="CloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.cloudtrailParameters"></a>

```go
CloudtrailParameters ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a>

Telemetry parameters for Cloudtrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#cloudtrail_parameters ObservabilityadminOrganizationTelemetryRule#cloudtrail_parameters}

---

##### `DestinationPattern`<sup>Optional</sup> <a name="DestinationPattern" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.destinationPattern"></a>

```go
DestinationPattern *string
```

- *Type:* *string

Pattern for telemetry data destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#destination_pattern ObservabilityadminOrganizationTelemetryRule#destination_pattern}

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Type of telemetry destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#destination_type ObservabilityadminOrganizationTelemetryRule#destination_type}

---

##### `ElbLoadBalancerLoggingParameters`<sup>Optional</sup> <a name="ElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.elbLoadBalancerLoggingParameters"></a>

```go
ElbLoadBalancerLoggingParameters ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a>

Telemetry parameters for ELB/NLB Load Balancer Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#elb_load_balancer_logging_parameters ObservabilityadminOrganizationTelemetryRule#elb_load_balancer_logging_parameters}

---

##### `LogDeliveryParameters`<sup>Optional</sup> <a name="LogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.logDeliveryParameters"></a>

```go
LogDeliveryParameters ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a>

Parameters for log delivery configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_delivery_parameters ObservabilityadminOrganizationTelemetryRule#log_delivery_parameters}

---

##### `RetentionInDays`<sup>Optional</sup> <a name="RetentionInDays" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.retentionInDays"></a>

```go
RetentionInDays *f64
```

- *Type:* *f64

Number of days to retain the telemetry data in the specified destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#retention_in_days ObservabilityadminOrganizationTelemetryRule#retention_in_days}

---

##### `VpcFlowLogParameters`<sup>Optional</sup> <a name="VpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.vpcFlowLogParameters"></a>

```go
VpcFlowLogParameters ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a>

Telemetry parameters for VPC Flow logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#vpc_flow_log_parameters ObservabilityadminOrganizationTelemetryRule#vpc_flow_log_parameters}

---

##### `WafLoggingParameters`<sup>Optional</sup> <a name="WafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration.property.wafLoggingParameters"></a>

```go
WafLoggingParameters ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a>

Telemetry parameters for WAF v2 Web ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#waf_logging_parameters ObservabilityadminOrganizationTelemetryRule#waf_logging_parameters}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters {
	AdvancedEventSelectors: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters.property.advancedEventSelectors">AdvancedEventSelectors</a></code> | <code>interface{}</code> | Create fine-grained selectors for AWS CloudTrail management and data. |

---

##### `AdvancedEventSelectors`<sup>Optional</sup> <a name="AdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters.property.advancedEventSelectors"></a>

```go
AdvancedEventSelectors interface{}
```

- *Type:* interface{}

Create fine-grained selectors for AWS CloudTrail management and data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#advanced_event_selectors ObservabilityadminOrganizationTelemetryRule#advanced_event_selectors}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors {
	FieldSelectors: interface{},
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.fieldSelectors">FieldSelectors</a></code> | <code>interface{}</code> | Contains all selector statements in an advanced event selector. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.name">Name</a></code> | <code>*string</code> | An optional descriptive name for the advanced event selector. |

---

##### `FieldSelectors`<sup>Optional</sup> <a name="FieldSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.fieldSelectors"></a>

```go
FieldSelectors interface{}
```

- *Type:* interface{}

Contains all selector statements in an advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#field_selectors ObservabilityadminOrganizationTelemetryRule#field_selectors}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectors.property.name"></a>

```go
Name *string
```

- *Type:* *string

An optional descriptive name for the advanced event selector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#name ObservabilityadminOrganizationTelemetryRule#name}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors {
	EndsWith: *[]*string,
	EqualTo: *[]*string,
	Field: *string,
	NotEndsWith: *[]*string,
	NotEquals: *[]*string,
	NotStartsWith: *[]*string,
	StartsWith: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.endsWith">EndsWith</a></code> | <code>*[]*string</code> | An operator that includes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | An operator that includes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.field">Field</a></code> | <code>*string</code> | A field in a CloudTrail event record on which to filter events to be logged. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEndsWith">NotEndsWith</a></code> | <code>*[]*string</code> | An operator that excludes events that match the last few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEquals">NotEquals</a></code> | <code>*[]*string</code> | An operator that excludes events that match the exact value of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notStartsWith">NotStartsWith</a></code> | <code>*[]*string</code> | An operator that excludes events that match the first few characters of the event record field specified as the value of Field. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.startsWith">StartsWith</a></code> | <code>*[]*string</code> | An operator that includes events that match the first few characters of the event record field specified as the value of Field. |

---

##### `EndsWith`<sup>Optional</sup> <a name="EndsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.endsWith"></a>

```go
EndsWith *[]*string
```

- *Type:* *[]*string

An operator that includes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#ends_with ObservabilityadminOrganizationTelemetryRule#ends_with}

---

##### `EqualTo`<sup>Optional</sup> <a name="EqualTo" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.equalTo"></a>

```go
EqualTo *[]*string
```

- *Type:* *[]*string

An operator that includes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#equals ObservabilityadminOrganizationTelemetryRule#equals}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.field"></a>

```go
Field *string
```

- *Type:* *string

A field in a CloudTrail event record on which to filter events to be logged.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#field ObservabilityadminOrganizationTelemetryRule#field}

---

##### `NotEndsWith`<sup>Optional</sup> <a name="NotEndsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEndsWith"></a>

```go
NotEndsWith *[]*string
```

- *Type:* *[]*string

An operator that excludes events that match the last few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#not_ends_with ObservabilityadminOrganizationTelemetryRule#not_ends_with}

---

##### `NotEquals`<sup>Optional</sup> <a name="NotEquals" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notEquals"></a>

```go
NotEquals *[]*string
```

- *Type:* *[]*string

An operator that excludes events that match the exact value of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#not_equals ObservabilityadminOrganizationTelemetryRule#not_equals}

---

##### `NotStartsWith`<sup>Optional</sup> <a name="NotStartsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.notStartsWith"></a>

```go
NotStartsWith *[]*string
```

- *Type:* *[]*string

An operator that excludes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#not_starts_with ObservabilityadminOrganizationTelemetryRule#not_starts_with}

---

##### `StartsWith`<sup>Optional</sup> <a name="StartsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectors.property.startsWith"></a>

```go
StartsWith *[]*string
```

- *Type:* *[]*string

An operator that includes events that match the first few characters of the event record field specified as the value of Field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#starts_with ObservabilityadminOrganizationTelemetryRule#starts_with}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters {
	FieldDelimiter: *string,
	OutputFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | A delimiter to delineate log fields. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#output_format ObservabilityadminOrganizationTelemetryRule#output_format}. |

---

##### `FieldDelimiter`<sup>Optional</sup> <a name="FieldDelimiter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.fieldDelimiter"></a>

```go
FieldDelimiter *string
```

- *Type:* *string

A delimiter to delineate log fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#field_delimiter ObservabilityadminOrganizationTelemetryRule#field_delimiter}

---

##### `OutputFormat`<sup>Optional</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters.property.outputFormat"></a>

```go
OutputFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#output_format ObservabilityadminOrganizationTelemetryRule#output_format}.

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters {
	LogTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters.property.logTypes">LogTypes</a></code> | <code>*[]*string</code> | Types of logs to deliver. |

---

##### `LogTypes`<sup>Optional</sup> <a name="LogTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters.property.logTypes"></a>

```go
LogTypes *[]*string
```

- *Type:* *[]*string

Types of logs to deliver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_types ObservabilityadminOrganizationTelemetryRule#log_types}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters {
	LogFormat: *string,
	MaxAggregationInterval: *f64,
	TrafficType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.logFormat">LogFormat</a></code> | <code>*string</code> | The fields to include in the flow log record. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.maxAggregationInterval">MaxAggregationInterval</a></code> | <code>*f64</code> | The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.trafficType">TrafficType</a></code> | <code>*string</code> | The type of traffic captured for the flow log. Default is ALL. |

---

##### `LogFormat`<sup>Optional</sup> <a name="LogFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.logFormat"></a>

```go
LogFormat *string
```

- *Type:* *string

The fields to include in the flow log record.

If you omit this parameter, the flow log is created using the default format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_format ObservabilityadminOrganizationTelemetryRule#log_format}

---

##### `MaxAggregationInterval`<sup>Optional</sup> <a name="MaxAggregationInterval" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.maxAggregationInterval"></a>

```go
MaxAggregationInterval *f64
```

- *Type:* *f64

The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record.

Default is 600s.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#max_aggregation_interval ObservabilityadminOrganizationTelemetryRule#max_aggregation_interval}

---

##### `TrafficType`<sup>Optional</sup> <a name="TrafficType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters.property.trafficType"></a>

```go
TrafficType *string
```

- *Type:* *string

The type of traffic captured for the flow log. Default is ALL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#traffic_type ObservabilityadminOrganizationTelemetryRule#traffic_type}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters {
	LoggingFilter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter,
	LogType: *string,
	RedactedFields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.loggingFilter">LoggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a></code> | Default handling for logs that don't match any of the specified filtering conditions. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.logType">LogType</a></code> | <code>*string</code> | The type of logs to generate for WAF. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.redactedFields">RedactedFields</a></code> | <code>interface{}</code> | Fields not to be included in the logs. |

---

##### `LoggingFilter`<sup>Optional</sup> <a name="LoggingFilter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.loggingFilter"></a>

```go
LoggingFilter ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a>

Default handling for logs that don't match any of the specified filtering conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#logging_filter ObservabilityadminOrganizationTelemetryRule#logging_filter}

---

##### `LogType`<sup>Optional</sup> <a name="LogType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.logType"></a>

```go
LogType *string
```

- *Type:* *string

The type of logs to generate for WAF.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#log_type ObservabilityadminOrganizationTelemetryRule#log_type}

---

##### `RedactedFields`<sup>Optional</sup> <a name="RedactedFields" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters.property.redactedFields"></a>

```go
RedactedFields interface{}
```

- *Type:* interface{}

Fields not to be included in the logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#redacted_fields ObservabilityadminOrganizationTelemetryRule#redacted_fields}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter {
	DefaultBehavior: *string,
	Filters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.defaultBehavior">DefaultBehavior</a></code> | <code>*string</code> | The behavior required of the filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.filters">Filters</a></code> | <code>interface{}</code> | A list of filters to be applied. |

---

##### `DefaultBehavior`<sup>Optional</sup> <a name="DefaultBehavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.defaultBehavior"></a>

```go
DefaultBehavior *string
```

- *Type:* *string

The behavior required of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#default_behavior ObservabilityadminOrganizationTelemetryRule#default_behavior}

---

##### `Filters`<sup>Optional</sup> <a name="Filters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter.property.filters"></a>

```go
Filters interface{}
```

- *Type:* interface{}

A list of filters to be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#filters ObservabilityadminOrganizationTelemetryRule#filters}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters {
	Behavior: *string,
	Conditions: interface{},
	Requirement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.behavior">Behavior</a></code> | <code>*string</code> | The behavior required of the filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.conditions">Conditions</a></code> | <code>interface{}</code> | A list of conditions for a filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.requirement">Requirement</a></code> | <code>*string</code> | The requirement portion of the filter. |

---

##### `Behavior`<sup>Optional</sup> <a name="Behavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.behavior"></a>

```go
Behavior *string
```

- *Type:* *string

The behavior required of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#behavior ObservabilityadminOrganizationTelemetryRule#behavior}

---

##### `Conditions`<sup>Optional</sup> <a name="Conditions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.conditions"></a>

```go
Conditions interface{}
```

- *Type:* interface{}

A list of conditions for a filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#conditions ObservabilityadminOrganizationTelemetryRule#conditions}

---

##### `Requirement`<sup>Optional</sup> <a name="Requirement" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFilters.property.requirement"></a>

```go
Requirement *string
```

- *Type:* *string

The requirement portion of the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#requirement ObservabilityadminOrganizationTelemetryRule#requirement}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions {
	ActionCondition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition,
	LabelNameCondition: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.actionCondition">ActionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a></code> | The condition of the action desired in the filter. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.labelNameCondition">LabelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a></code> | The label name of the condition. |

---

##### `ActionCondition`<sup>Optional</sup> <a name="ActionCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.actionCondition"></a>

```go
ActionCondition ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a>

The condition of the action desired in the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#action_condition ObservabilityadminOrganizationTelemetryRule#action_condition}

---

##### `LabelNameCondition`<sup>Optional</sup> <a name="LabelNameCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditions.property.labelNameCondition"></a>

```go
LabelNameCondition ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a>

The label name of the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#label_name_condition ObservabilityadminOrganizationTelemetryRule#label_name_condition}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition {
	Action: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition.property.action">Action</a></code> | <code>*string</code> | The enumerated action to take. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition.property.action"></a>

```go
Action *string
```

- *Type:* *string

The enumerated action to take.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#action ObservabilityadminOrganizationTelemetryRule#action}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition {
	LabelName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition.property.labelName">LabelName</a></code> | <code>*string</code> | The label name of the condition. |

---

##### `LabelName`<sup>Optional</sup> <a name="LabelName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition.property.labelName"></a>

```go
LabelName *string
```

- *Type:* *string

The label name of the condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#label_name ObservabilityadminOrganizationTelemetryRule#label_name}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields {
	Method: *string,
	QueryString: *string,
	SingleHeader: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader,
	UriPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.method">Method</a></code> | <code>*string</code> | The method with which to match this rule. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.queryString">QueryString</a></code> | <code>*string</code> | The query string to find the resource to match this field to. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.singleHeader">SingleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a></code> | Header for the field to match. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.uriPath">UriPath</a></code> | <code>*string</code> | This is the URI path to match this rule to. |

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.method"></a>

```go
Method *string
```

- *Type:* *string

The method with which to match this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#method ObservabilityadminOrganizationTelemetryRule#method}

---

##### `QueryString`<sup>Optional</sup> <a name="QueryString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.queryString"></a>

```go
QueryString *string
```

- *Type:* *string

The query string to find the resource to match this field to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#query_string ObservabilityadminOrganizationTelemetryRule#query_string}

---

##### `SingleHeader`<sup>Optional</sup> <a name="SingleHeader" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.singleHeader"></a>

```go
SingleHeader ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a>

Header for the field to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#single_header ObservabilityadminOrganizationTelemetryRule#single_header}

---

##### `UriPath`<sup>Optional</sup> <a name="UriPath" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFields.property.uriPath"></a>

```go
UriPath *string
```

- *Type:* *string

This is the URI path to match this rule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#uri_path ObservabilityadminOrganizationTelemetryRule#uri_path}

---

### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader.property.name">Name</a></code> | <code>*string</code> | The name of the header. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#name ObservabilityadminOrganizationTelemetryRule#name}

---

### ObservabilityadminOrganizationTelemetryRuleTags <a name="ObservabilityadminOrganizationTelemetryRuleTags" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

&observabilityadminorganizationtelemetryrule.ObservabilityadminOrganizationTelemetryRuleTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#key ObservabilityadminOrganizationTelemetryRule#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/observabilityadmin_organization_telemetry_rule#value ObservabilityadminOrganizationTelemetryRule#value}

---

## Classes <a name="Classes" id="Classes"></a>

### ObservabilityadminOrganizationTelemetryRuleRegionStatusesList <a name="ObservabilityadminOrganizationTelemetryRuleRegionStatusesList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRegionStatusesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityadminOrganizationTelemetryRuleRegionStatusesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.get"></a>

```go
func Get(index *f64) ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.ruleArn">RuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatuses">ObservabilityadminOrganizationTelemetryRuleRegionStatuses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RuleArn`<sup>Required</sup> <a name="RuleArn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.ruleArn"></a>

```go
func RuleArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatusesOutputReference.property.internalValue"></a>

```go
func InternalValue() ObservabilityadminOrganizationTelemetryRuleRegionStatuses
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRegionStatuses">ObservabilityadminOrganizationTelemetryRuleRegionStatuses</a>

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.get"></a>

```go
func Get(index *f64) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith">ResetEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo">ResetEqualTo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetField">ResetField</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith">ResetNotEndsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals">ResetNotEquals</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith">ResetNotStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith">ResetStartsWith</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEndsWith` <a name="ResetEndsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEndsWith"></a>

```go
func ResetEndsWith()
```

##### `ResetEqualTo` <a name="ResetEqualTo" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetEqualTo"></a>

```go
func ResetEqualTo()
```

##### `ResetField` <a name="ResetField" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetField"></a>

```go
func ResetField()
```

##### `ResetNotEndsWith` <a name="ResetNotEndsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEndsWith"></a>

```go
func ResetNotEndsWith()
```

##### `ResetNotEquals` <a name="ResetNotEquals" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotEquals"></a>

```go
func ResetNotEquals()
```

##### `ResetNotStartsWith` <a name="ResetNotStartsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetNotStartsWith"></a>

```go
func ResetNotStartsWith()
```

##### `ResetStartsWith` <a name="ResetStartsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.resetStartsWith"></a>

```go
func ResetStartsWith()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput">EndsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput">EqualToInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput">NotEndsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput">NotEqualsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput">NotStartsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput">StartsWithInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">EndsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">EqualTo</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">NotEndsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">NotEquals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">NotStartsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">StartsWith</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndsWithInput`<sup>Optional</sup> <a name="EndsWithInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWithInput"></a>

```go
func EndsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `EqualToInput`<sup>Optional</sup> <a name="EqualToInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalToInput"></a>

```go
func EqualToInput() *[]*string
```

- *Type:* *[]*string

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `NotEndsWithInput`<sup>Optional</sup> <a name="NotEndsWithInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWithInput"></a>

```go
func NotEndsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotEqualsInput`<sup>Optional</sup> <a name="NotEqualsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEqualsInput"></a>

```go
func NotEqualsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NotStartsWithInput`<sup>Optional</sup> <a name="NotStartsWithInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWithInput"></a>

```go
func NotStartsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `StartsWithInput`<sup>Optional</sup> <a name="StartsWithInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWithInput"></a>

```go
func StartsWithInput() *[]*string
```

- *Type:* *[]*string

---

##### `EndsWith`<sup>Required</sup> <a name="EndsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```go
func EndsWith() *[]*string
```

- *Type:* *[]*string

---

##### `EqualTo`<sup>Required</sup> <a name="EqualTo" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```go
func EqualTo() *[]*string
```

- *Type:* *[]*string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `NotEndsWith`<sup>Required</sup> <a name="NotEndsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```go
func NotEndsWith() *[]*string
```

- *Type:* *[]*string

---

##### `NotEquals`<sup>Required</sup> <a name="NotEquals" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```go
func NotEquals() *[]*string
```

- *Type:* *[]*string

---

##### `NotStartsWith`<sup>Required</sup> <a name="NotStartsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```go
func NotStartsWith() *[]*string
```

- *Type:* *[]*string

---

##### `StartsWith`<sup>Required</sup> <a name="StartsWith" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```go
func StartsWith() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.get"></a>

```go
func Get(index *f64) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.putFieldSelectors">PutFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetFieldSelectors">ResetFieldSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFieldSelectors` <a name="PutFieldSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.putFieldSelectors"></a>

```go
func PutFieldSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.putFieldSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFieldSelectors` <a name="ResetFieldSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetFieldSelectors"></a>

```go
func ResetFieldSelectors()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectors">FieldSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput">FieldSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldSelectors`<sup>Required</sup> <a name="FieldSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```go
func FieldSelectors() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `FieldSelectorsInput`<sup>Optional</sup> <a name="FieldSelectorsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.fieldSelectorsInput"></a>

```go
func FieldSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.putAdvancedEventSelectors">PutAdvancedEventSelectors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resetAdvancedEventSelectors">ResetAdvancedEventSelectors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedEventSelectors` <a name="PutAdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.putAdvancedEventSelectors"></a>

```go
func PutAdvancedEventSelectors(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.putAdvancedEventSelectors.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdvancedEventSelectors` <a name="ResetAdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.resetAdvancedEventSelectors"></a>

```go
func ResetAdvancedEventSelectors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectors">AdvancedEventSelectors</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectorsInput">AdvancedEventSelectorsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedEventSelectors`<sup>Required</sup> <a name="AdvancedEventSelectors" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectors"></a>

```go
func AdvancedEventSelectors() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersAdvancedEventSelectorsList</a>

---

##### `AdvancedEventSelectorsInput`<sup>Optional</sup> <a name="AdvancedEventSelectorsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.advancedEventSelectorsInput"></a>

```go
func AdvancedEventSelectorsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetFieldDelimiter">ResetFieldDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetOutputFormat">ResetOutputFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldDelimiter` <a name="ResetFieldDelimiter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetFieldDelimiter"></a>

```go
func ResetFieldDelimiter()
```

##### `ResetOutputFormat` <a name="ResetOutputFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.resetOutputFormat"></a>

```go
func ResetOutputFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiterInput">FieldDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormatInput">OutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiter">FieldDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormat">OutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldDelimiterInput`<sup>Optional</sup> <a name="FieldDelimiterInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiterInput"></a>

```go
func FieldDelimiterInput() *string
```

- *Type:* *string

---

##### `OutputFormatInput`<sup>Optional</sup> <a name="OutputFormatInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormatInput"></a>

```go
func OutputFormatInput() *string
```

- *Type:* *string

---

##### `FieldDelimiter`<sup>Required</sup> <a name="FieldDelimiter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.fieldDelimiter"></a>

```go
func FieldDelimiter() *string
```

- *Type:* *string

---

##### `OutputFormat`<sup>Required</sup> <a name="OutputFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.outputFormat"></a>

```go
func OutputFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resetLogTypes">ResetLogTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogTypes` <a name="ResetLogTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.resetLogTypes"></a>

```go
func ResetLogTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypesInput">LogTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypes">LogTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogTypesInput`<sup>Optional</sup> <a name="LogTypesInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypesInput"></a>

```go
func LogTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `LogTypes`<sup>Required</sup> <a name="LogTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.logTypes"></a>

```go
func LogTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putCloudtrailParameters">PutCloudtrailParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putElbLoadBalancerLoggingParameters">PutElbLoadBalancerLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putLogDeliveryParameters">PutLogDeliveryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putVpcFlowLogParameters">PutVpcFlowLogParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putWafLoggingParameters">PutWafLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetCloudtrailParameters">ResetCloudtrailParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationPattern">ResetDestinationPattern</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetElbLoadBalancerLoggingParameters">ResetElbLoadBalancerLoggingParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetLogDeliveryParameters">ResetLogDeliveryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetRetentionInDays">ResetRetentionInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetVpcFlowLogParameters">ResetVpcFlowLogParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetWafLoggingParameters">ResetWafLoggingParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudtrailParameters` <a name="PutCloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putCloudtrailParameters"></a>

```go
func PutCloudtrailParameters(value ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putCloudtrailParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParameters</a>

---

##### `PutElbLoadBalancerLoggingParameters` <a name="PutElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putElbLoadBalancerLoggingParameters"></a>

```go
func PutElbLoadBalancerLoggingParameters(value ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putElbLoadBalancerLoggingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParameters</a>

---

##### `PutLogDeliveryParameters` <a name="PutLogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putLogDeliveryParameters"></a>

```go
func PutLogDeliveryParameters(value ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putLogDeliveryParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParameters</a>

---

##### `PutVpcFlowLogParameters` <a name="PutVpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putVpcFlowLogParameters"></a>

```go
func PutVpcFlowLogParameters(value ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putVpcFlowLogParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParameters</a>

---

##### `PutWafLoggingParameters` <a name="PutWafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putWafLoggingParameters"></a>

```go
func PutWafLoggingParameters(value ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.putWafLoggingParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParameters</a>

---

##### `ResetCloudtrailParameters` <a name="ResetCloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetCloudtrailParameters"></a>

```go
func ResetCloudtrailParameters()
```

##### `ResetDestinationPattern` <a name="ResetDestinationPattern" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationPattern"></a>

```go
func ResetDestinationPattern()
```

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetDestinationType"></a>

```go
func ResetDestinationType()
```

##### `ResetElbLoadBalancerLoggingParameters` <a name="ResetElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetElbLoadBalancerLoggingParameters"></a>

```go
func ResetElbLoadBalancerLoggingParameters()
```

##### `ResetLogDeliveryParameters` <a name="ResetLogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetLogDeliveryParameters"></a>

```go
func ResetLogDeliveryParameters()
```

##### `ResetRetentionInDays` <a name="ResetRetentionInDays" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetRetentionInDays"></a>

```go
func ResetRetentionInDays()
```

##### `ResetVpcFlowLogParameters` <a name="ResetVpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetVpcFlowLogParameters"></a>

```go
func ResetVpcFlowLogParameters()
```

##### `ResetWafLoggingParameters` <a name="ResetWafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.resetWafLoggingParameters"></a>

```go
func ResetWafLoggingParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParameters">CloudtrailParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParameters">ElbLoadBalancerLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParameters">LogDeliveryParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParameters">VpcFlowLogParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParameters">WafLoggingParameters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParametersInput">CloudtrailParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPatternInput">DestinationPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParametersInput">ElbLoadBalancerLoggingParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParametersInput">LogDeliveryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDaysInput">RetentionInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParametersInput">VpcFlowLogParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParametersInput">WafLoggingParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPattern">DestinationPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudtrailParameters`<sup>Required</sup> <a name="CloudtrailParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParameters"></a>

```go
func CloudtrailParameters() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationCloudtrailParametersOutputReference</a>

---

##### `ElbLoadBalancerLoggingParameters`<sup>Required</sup> <a name="ElbLoadBalancerLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParameters"></a>

```go
func ElbLoadBalancerLoggingParameters() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationElbLoadBalancerLoggingParametersOutputReference</a>

---

##### `LogDeliveryParameters`<sup>Required</sup> <a name="LogDeliveryParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParameters"></a>

```go
func LogDeliveryParameters() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationLogDeliveryParametersOutputReference</a>

---

##### `VpcFlowLogParameters`<sup>Required</sup> <a name="VpcFlowLogParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParameters"></a>

```go
func VpcFlowLogParameters() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference</a>

---

##### `WafLoggingParameters`<sup>Required</sup> <a name="WafLoggingParameters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParameters"></a>

```go
func WafLoggingParameters() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference</a>

---

##### `CloudtrailParametersInput`<sup>Optional</sup> <a name="CloudtrailParametersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.cloudtrailParametersInput"></a>

```go
func CloudtrailParametersInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationPatternInput`<sup>Optional</sup> <a name="DestinationPatternInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPatternInput"></a>

```go
func DestinationPatternInput() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `ElbLoadBalancerLoggingParametersInput`<sup>Optional</sup> <a name="ElbLoadBalancerLoggingParametersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.elbLoadBalancerLoggingParametersInput"></a>

```go
func ElbLoadBalancerLoggingParametersInput() interface{}
```

- *Type:* interface{}

---

##### `LogDeliveryParametersInput`<sup>Optional</sup> <a name="LogDeliveryParametersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.logDeliveryParametersInput"></a>

```go
func LogDeliveryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `RetentionInDaysInput`<sup>Optional</sup> <a name="RetentionInDaysInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDaysInput"></a>

```go
func RetentionInDaysInput() *f64
```

- *Type:* *f64

---

##### `VpcFlowLogParametersInput`<sup>Optional</sup> <a name="VpcFlowLogParametersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.vpcFlowLogParametersInput"></a>

```go
func VpcFlowLogParametersInput() interface{}
```

- *Type:* interface{}

---

##### `WafLoggingParametersInput`<sup>Optional</sup> <a name="WafLoggingParametersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.wafLoggingParametersInput"></a>

```go
func WafLoggingParametersInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationPattern`<sup>Required</sup> <a name="DestinationPattern" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationPattern"></a>

```go
func DestinationPattern() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.retentionInDays"></a>

```go
func RetentionInDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetLogFormat">ResetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetMaxAggregationInterval">ResetMaxAggregationInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetTrafficType">ResetTrafficType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLogFormat` <a name="ResetLogFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetLogFormat"></a>

```go
func ResetLogFormat()
```

##### `ResetMaxAggregationInterval` <a name="ResetMaxAggregationInterval" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetMaxAggregationInterval"></a>

```go
func ResetMaxAggregationInterval()
```

##### `ResetTrafficType` <a name="ResetTrafficType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.resetTrafficType"></a>

```go
func ResetTrafficType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormatInput">LogFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationIntervalInput">MaxAggregationIntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficTypeInput">TrafficTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormat">LogFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationInterval">MaxAggregationInterval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficType">TrafficType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LogFormatInput`<sup>Optional</sup> <a name="LogFormatInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormatInput"></a>

```go
func LogFormatInput() *string
```

- *Type:* *string

---

##### `MaxAggregationIntervalInput`<sup>Optional</sup> <a name="MaxAggregationIntervalInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationIntervalInput"></a>

```go
func MaxAggregationIntervalInput() *f64
```

- *Type:* *f64

---

##### `TrafficTypeInput`<sup>Optional</sup> <a name="TrafficTypeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficTypeInput"></a>

```go
func TrafficTypeInput() *string
```

- *Type:* *string

---

##### `LogFormat`<sup>Required</sup> <a name="LogFormat" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.logFormat"></a>

```go
func LogFormat() *string
```

- *Type:* *string

---

##### `MaxAggregationInterval`<sup>Required</sup> <a name="MaxAggregationInterval" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.maxAggregationInterval"></a>

```go
func MaxAggregationInterval() *f64
```

- *Type:* *f64

---

##### `TrafficType`<sup>Required</sup> <a name="TrafficType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.trafficType"></a>

```go
func TrafficType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationVpcFlowLogParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction">ResetAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAction` <a name="ResetAction" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.resetAction"></a>

```go
func ResetAction()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName">ResetLabelName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLabelName` <a name="ResetLabelName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.resetLabelName"></a>

```go
func ResetLabelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput">LabelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName">LabelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LabelNameInput`<sup>Optional</sup> <a name="LabelNameInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelNameInput"></a>

```go
func LabelNameInput() *string
```

- *Type:* *string

---

##### `LabelName`<sup>Required</sup> <a name="LabelName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.labelName"></a>

```go
func LabelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.get"></a>

```go
func Get(index *f64) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putActionCondition">PutActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition">PutLabelNameCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetActionCondition">ResetActionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition">ResetLabelNameCondition</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutActionCondition` <a name="PutActionCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putActionCondition"></a>

```go
func PutActionCondition(value ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putActionCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionCondition</a>

---

##### `PutLabelNameCondition` <a name="PutLabelNameCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition"></a>

```go
func PutLabelNameCondition(value ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.putLabelNameCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameCondition</a>

---

##### `ResetActionCondition` <a name="ResetActionCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetActionCondition"></a>

```go
func ResetActionCondition()
```

##### `ResetLabelNameCondition` <a name="ResetLabelNameCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.resetLabelNameCondition"></a>

```go
func ResetLabelNameCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionCondition">ActionCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition">LabelNameCondition</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput">ActionConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput">LabelNameConditionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionCondition`<sup>Required</sup> <a name="ActionCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionCondition"></a>

```go
func ActionCondition() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsActionConditionOutputReference</a>

---

##### `LabelNameCondition`<sup>Required</sup> <a name="LabelNameCondition" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameCondition"></a>

```go
func LabelNameCondition() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsLabelNameConditionOutputReference</a>

---

##### `ActionConditionInput`<sup>Optional</sup> <a name="ActionConditionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.actionConditionInput"></a>

```go
func ActionConditionInput() interface{}
```

- *Type:* interface{}

---

##### `LabelNameConditionInput`<sup>Optional</sup> <a name="LabelNameConditionInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.labelNameConditionInput"></a>

```go
func LabelNameConditionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.get"></a>

```go
func Get(index *f64) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetBehavior">ResetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetConditions">ResetConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetRequirement">ResetRequirement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.putConditions"></a>

```go
func PutConditions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.putConditions.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBehavior` <a name="ResetBehavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetBehavior"></a>

```go
func ResetBehavior()
```

##### `ResetConditions` <a name="ResetConditions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetConditions"></a>

```go
func ResetConditions()
```

##### `ResetRequirement` <a name="ResetRequirement" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.resetRequirement"></a>

```go
func ResetRequirement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behaviorInput">BehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirementInput">RequirementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behavior">Behavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirement">Requirement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditions"></a>

```go
func Conditions() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersConditionsList</a>

---

##### `BehaviorInput`<sup>Optional</sup> <a name="BehaviorInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behaviorInput"></a>

```go
func BehaviorInput() *string
```

- *Type:* *string

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.conditionsInput"></a>

```go
func ConditionsInput() interface{}
```

- *Type:* interface{}

---

##### `RequirementInput`<sup>Optional</sup> <a name="RequirementInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirementInput"></a>

```go
func RequirementInput() *string
```

- *Type:* *string

---

##### `Behavior`<sup>Required</sup> <a name="Behavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.behavior"></a>

```go
func Behavior() *string
```

- *Type:* *string

---

##### `Requirement`<sup>Required</sup> <a name="Requirement" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.requirement"></a>

```go
func Requirement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.putFilters">PutFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetDefaultBehavior">ResetDefaultBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetFilters">ResetFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFilters` <a name="PutFilters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.putFilters"></a>

```go
func PutFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.putFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultBehavior` <a name="ResetDefaultBehavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetDefaultBehavior"></a>

```go
func ResetDefaultBehavior()
```

##### `ResetFilters` <a name="ResetFilters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.resetFilters"></a>

```go
func ResetFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filters">Filters</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehaviorInput">DefaultBehaviorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filtersInput">FiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehavior">DefaultBehavior</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filters"></a>

```go
func Filters() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterFiltersList</a>

---

##### `DefaultBehaviorInput`<sup>Optional</sup> <a name="DefaultBehaviorInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehaviorInput"></a>

```go
func DefaultBehaviorInput() *string
```

- *Type:* *string

---

##### `FiltersInput`<sup>Optional</sup> <a name="FiltersInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.filtersInput"></a>

```go
func FiltersInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultBehavior`<sup>Required</sup> <a name="DefaultBehavior" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.defaultBehavior"></a>

```go
func DefaultBehavior() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putLoggingFilter">PutLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putRedactedFields">PutRedactedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLoggingFilter">ResetLoggingFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLogType">ResetLogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetRedactedFields">ResetRedactedFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLoggingFilter` <a name="PutLoggingFilter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putLoggingFilter"></a>

```go
func PutLoggingFilter(value ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putLoggingFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilter</a>

---

##### `PutRedactedFields` <a name="PutRedactedFields" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putRedactedFields"></a>

```go
func PutRedactedFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.putRedactedFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLoggingFilter` <a name="ResetLoggingFilter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLoggingFilter"></a>

```go
func ResetLoggingFilter()
```

##### `ResetLogType` <a name="ResetLogType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetLogType"></a>

```go
func ResetLogType()
```

##### `ResetRedactedFields` <a name="ResetRedactedFields" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.resetRedactedFields"></a>

```go
func ResetRedactedFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilter">LoggingFilter</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFields">RedactedFields</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilterInput">LoggingFilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logTypeInput">LogTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFieldsInput">RedactedFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logType">LogType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoggingFilter`<sup>Required</sup> <a name="LoggingFilter" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilter"></a>

```go
func LoggingFilter() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersLoggingFilterOutputReference</a>

---

##### `RedactedFields`<sup>Required</sup> <a name="RedactedFields" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFields"></a>

```go
func RedactedFields() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList</a>

---

##### `LoggingFilterInput`<sup>Optional</sup> <a name="LoggingFilterInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.loggingFilterInput"></a>

```go
func LoggingFilterInput() interface{}
```

- *Type:* interface{}

---

##### `LogTypeInput`<sup>Optional</sup> <a name="LogTypeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logTypeInput"></a>

```go
func LogTypeInput() *string
```

- *Type:* *string

---

##### `RedactedFieldsInput`<sup>Optional</sup> <a name="RedactedFieldsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.redactedFieldsInput"></a>

```go
func RedactedFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `LogType`<sup>Required</sup> <a name="LogType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.logType"></a>

```go
func LogType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.get"></a>

```go
func Get(index *f64) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.putSingleHeader">PutSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetQueryString">ResetQueryString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetSingleHeader">ResetSingleHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetUriPath">ResetUriPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSingleHeader` <a name="PutSingleHeader" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.putSingleHeader"></a>

```go
func PutSingleHeader(value ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.putSingleHeader.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeader</a>

---

##### `ResetMethod` <a name="ResetMethod" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetMethod"></a>

```go
func ResetMethod()
```

##### `ResetQueryString` <a name="ResetQueryString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetQueryString"></a>

```go
func ResetQueryString()
```

##### `ResetSingleHeader` <a name="ResetSingleHeader" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetSingleHeader"></a>

```go
func ResetSingleHeader()
```

##### `ResetUriPath` <a name="ResetUriPath" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.resetUriPath"></a>

```go
func ResetUriPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeader">SingleHeader</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.methodInput">MethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryStringInput">QueryStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeaderInput">SingleHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPathInput">UriPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryString">QueryString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPath">UriPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SingleHeader`<sup>Required</sup> <a name="SingleHeader" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeader"></a>

```go
func SingleHeader() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference</a>

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.methodInput"></a>

```go
func MethodInput() *string
```

- *Type:* *string

---

##### `QueryStringInput`<sup>Optional</sup> <a name="QueryStringInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryStringInput"></a>

```go
func QueryStringInput() *string
```

- *Type:* *string

---

##### `SingleHeaderInput`<sup>Optional</sup> <a name="SingleHeaderInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.singleHeaderInput"></a>

```go
func SingleHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `UriPathInput`<sup>Optional</sup> <a name="UriPathInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPathInput"></a>

```go
func UriPathInput() *string
```

- *Type:* *string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `QueryString`<sup>Required</sup> <a name="QueryString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.queryString"></a>

```go
func QueryString() *string
```

- *Type:* *string

---

##### `UriPath`<sup>Required</sup> <a name="UriPath" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.uriPath"></a>

```go
func UriPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationWafLoggingParametersRedactedFieldsSingleHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleRuleOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleRuleOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObservabilityadminOrganizationTelemetryRuleRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.putDestinationConfiguration">PutDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetAllowFieldUpdates">ResetAllowFieldUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetAllRegions">ResetAllRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetDestinationConfiguration">ResetDestinationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetSelectionCriteria">ResetSelectionCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetTelemetrySourceTypes">ResetTelemetrySourceTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinationConfiguration` <a name="PutDestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.putDestinationConfiguration"></a>

```go
func PutDestinationConfiguration(value ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.putDestinationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfiguration</a>

---

##### `ResetAllowFieldUpdates` <a name="ResetAllowFieldUpdates" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetAllowFieldUpdates"></a>

```go
func ResetAllowFieldUpdates()
```

##### `ResetAllRegions` <a name="ResetAllRegions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetAllRegions"></a>

```go
func ResetAllRegions()
```

##### `ResetDestinationConfiguration` <a name="ResetDestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetDestinationConfiguration"></a>

```go
func ResetDestinationConfiguration()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetRegions"></a>

```go
func ResetRegions()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSelectionCriteria` <a name="ResetSelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetSelectionCriteria"></a>

```go
func ResetSelectionCriteria()
```

##### `ResetTelemetrySourceTypes` <a name="ResetTelemetrySourceTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.resetTelemetrySourceTypes"></a>

```go
func ResetTelemetrySourceTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.destinationConfiguration">DestinationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allowFieldUpdatesInput">AllowFieldUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allRegionsInput">AllRegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.destinationConfigurationInput">DestinationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.selectionCriteriaInput">SelectionCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetrySourceTypesInput">TelemetrySourceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetryTypeInput">TelemetryTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allowFieldUpdates">AllowFieldUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allRegions">AllRegions</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.selectionCriteria">SelectionCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetrySourceTypes">TelemetrySourceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetryType">TelemetryType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationConfiguration`<sup>Required</sup> <a name="DestinationConfiguration" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.destinationConfiguration"></a>

```go
func DestinationConfiguration() ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference">ObservabilityadminOrganizationTelemetryRuleRuleDestinationConfigurationOutputReference</a>

---

##### `AllowFieldUpdatesInput`<sup>Optional</sup> <a name="AllowFieldUpdatesInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allowFieldUpdatesInput"></a>

```go
func AllowFieldUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `AllRegionsInput`<sup>Optional</sup> <a name="AllRegionsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allRegionsInput"></a>

```go
func AllRegionsInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationConfigurationInput`<sup>Optional</sup> <a name="DestinationConfigurationInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.destinationConfigurationInput"></a>

```go
func DestinationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SelectionCriteriaInput`<sup>Optional</sup> <a name="SelectionCriteriaInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.selectionCriteriaInput"></a>

```go
func SelectionCriteriaInput() *string
```

- *Type:* *string

---

##### `TelemetrySourceTypesInput`<sup>Optional</sup> <a name="TelemetrySourceTypesInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetrySourceTypesInput"></a>

```go
func TelemetrySourceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TelemetryTypeInput`<sup>Optional</sup> <a name="TelemetryTypeInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetryTypeInput"></a>

```go
func TelemetryTypeInput() *string
```

- *Type:* *string

---

##### `AllowFieldUpdates`<sup>Required</sup> <a name="AllowFieldUpdates" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allowFieldUpdates"></a>

```go
func AllowFieldUpdates() interface{}
```

- *Type:* interface{}

---

##### `AllRegions`<sup>Required</sup> <a name="AllRegions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.allRegions"></a>

```go
func AllRegions() interface{}
```

- *Type:* interface{}

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SelectionCriteria`<sup>Required</sup> <a name="SelectionCriteria" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.selectionCriteria"></a>

```go
func SelectionCriteria() *string
```

- *Type:* *string

---

##### `TelemetrySourceTypes`<sup>Required</sup> <a name="TelemetrySourceTypes" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetrySourceTypes"></a>

```go
func TelemetrySourceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `TelemetryType`<sup>Required</sup> <a name="TelemetryType" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.telemetryType"></a>

```go
func TelemetryType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleTagsList <a name="ObservabilityadminOrganizationTelemetryRuleTagsList" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObservabilityadminOrganizationTelemetryRuleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.get"></a>

```go
func Get(index *f64) ObservabilityadminOrganizationTelemetryRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObservabilityadminOrganizationTelemetryRuleTagsOutputReference <a name="ObservabilityadminOrganizationTelemetryRuleTagsOutputReference" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/observabilityadminorganizationtelemetryrule"

observabilityadminorganizationtelemetryrule.NewObservabilityadminOrganizationTelemetryRuleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObservabilityadminOrganizationTelemetryRuleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.observabilityadminOrganizationTelemetryRule.ObservabilityadminOrganizationTelemetryRuleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



