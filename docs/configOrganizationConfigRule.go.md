# `configOrganizationConfigRule` Submodule <a name="`configOrganizationConfigRule` Submodule" id="@cdktn/provider-awscc.configOrganizationConfigRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConfigOrganizationConfigRule <a name="ConfigOrganizationConfigRule" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule awscc_config_organization_config_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

configorganizationconfigrule.NewConfigOrganizationConfigRule(scope Construct, id *string, config ConfigOrganizationConfigRuleConfig) ConfigOrganizationConfigRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig">ConfigOrganizationConfigRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig">ConfigOrganizationConfigRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata">PutOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata">PutOrganizationCustomRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata">PutOrganizationManagedRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetExcludedAccounts">ResetExcludedAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomPolicyRuleMetadata">ResetOrganizationCustomPolicyRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomRuleMetadata">ResetOrganizationCustomRuleMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationManagedRuleMetadata">ResetOrganizationManagedRuleMetadata</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOrganizationCustomPolicyRuleMetadata` <a name="PutOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata"></a>

```go
func PutOrganizationCustomPolicyRuleMetadata(value ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomPolicyRuleMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

---

##### `PutOrganizationCustomRuleMetadata` <a name="PutOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata"></a>

```go
func PutOrganizationCustomRuleMetadata(value ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationCustomRuleMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

---

##### `PutOrganizationManagedRuleMetadata` <a name="PutOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata"></a>

```go
func PutOrganizationManagedRuleMetadata(value ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.putOrganizationManagedRuleMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

---

##### `ResetExcludedAccounts` <a name="ResetExcludedAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetExcludedAccounts"></a>

```go
func ResetExcludedAccounts()
```

##### `ResetOrganizationCustomPolicyRuleMetadata` <a name="ResetOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomPolicyRuleMetadata"></a>

```go
func ResetOrganizationCustomPolicyRuleMetadata()
```

##### `ResetOrganizationCustomRuleMetadata` <a name="ResetOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationCustomRuleMetadata"></a>

```go
func ResetOrganizationCustomRuleMetadata()
```

##### `ResetOrganizationManagedRuleMetadata` <a name="ResetOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.resetOrganizationManagedRuleMetadata"></a>

```go
func ResetOrganizationManagedRuleMetadata()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

configorganizationconfigrule.ConfigOrganizationConfigRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

configorganizationconfigrule.ConfigOrganizationConfigRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

configorganizationconfigrule.ConfigOrganizationConfigRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

configorganizationconfigrule.ConfigOrganizationConfigRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ConfigOrganizationConfigRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ConfigOrganizationConfigRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ConfigOrganizationConfigRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ConfigOrganizationConfigRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleArn">OrganizationConfigRuleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata">OrganizationCustomPolicyRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadata">OrganizationCustomRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadata">OrganizationManagedRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccountsInput">ExcludedAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleNameInput">OrganizationConfigRuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadataInput">OrganizationCustomPolicyRuleMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadataInput">OrganizationCustomRuleMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadataInput">OrganizationManagedRuleMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccounts">ExcludedAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleName">OrganizationConfigRuleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrganizationConfigRuleArn`<sup>Required</sup> <a name="OrganizationConfigRuleArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleArn"></a>

```go
func OrganizationConfigRuleArn() *string
```

- *Type:* *string

---

##### `OrganizationCustomPolicyRuleMetadata`<sup>Required</sup> <a name="OrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadata"></a>

```go
func OrganizationCustomPolicyRuleMetadata() ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference</a>

---

##### `OrganizationCustomRuleMetadata`<sup>Required</sup> <a name="OrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadata"></a>

```go
func OrganizationCustomRuleMetadata() ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference</a>

---

##### `OrganizationManagedRuleMetadata`<sup>Required</sup> <a name="OrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadata"></a>

```go
func OrganizationManagedRuleMetadata() ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference</a>

---

##### `ExcludedAccountsInput`<sup>Optional</sup> <a name="ExcludedAccountsInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccountsInput"></a>

```go
func ExcludedAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationConfigRuleNameInput`<sup>Optional</sup> <a name="OrganizationConfigRuleNameInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleNameInput"></a>

```go
func OrganizationConfigRuleNameInput() *string
```

- *Type:* *string

---

##### `OrganizationCustomPolicyRuleMetadataInput`<sup>Optional</sup> <a name="OrganizationCustomPolicyRuleMetadataInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomPolicyRuleMetadataInput"></a>

```go
func OrganizationCustomPolicyRuleMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `OrganizationCustomRuleMetadataInput`<sup>Optional</sup> <a name="OrganizationCustomRuleMetadataInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationCustomRuleMetadataInput"></a>

```go
func OrganizationCustomRuleMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `OrganizationManagedRuleMetadataInput`<sup>Optional</sup> <a name="OrganizationManagedRuleMetadataInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationManagedRuleMetadataInput"></a>

```go
func OrganizationManagedRuleMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedAccounts`<sup>Required</sup> <a name="ExcludedAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.excludedAccounts"></a>

```go
func ExcludedAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `OrganizationConfigRuleName`<sup>Required</sup> <a name="OrganizationConfigRuleName" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.organizationConfigRuleName"></a>

```go
func OrganizationConfigRuleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ConfigOrganizationConfigRuleConfig <a name="ConfigOrganizationConfigRuleConfig" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

&configorganizationconfigrule.ConfigOrganizationConfigRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	OrganizationConfigRuleName: *string,
	ExcludedAccounts: *[]*string,
	OrganizationCustomPolicyRuleMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata,
	OrganizationCustomRuleMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata,
	OrganizationManagedRuleMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationConfigRuleName">OrganizationConfigRuleName</a></code> | <code>*string</code> | The name that you assign to an organization AWS Config rule. Required. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.excludedAccounts">ExcludedAccounts</a></code> | <code>*[]*string</code> | A comma-separated list of accounts that you want to exclude from an organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomPolicyRuleMetadata">OrganizationCustomPolicyRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a></code> | This object specifies metadata for your organization's AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomRuleMetadata">OrganizationCustomRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a></code> | This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationManagedRuleMetadata">OrganizationManagedRuleMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a></code> | This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrganizationConfigRuleName`<sup>Required</sup> <a name="OrganizationConfigRuleName" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationConfigRuleName"></a>

```go
OrganizationConfigRuleName *string
```

- *Type:* *string

The name that you assign to an organization AWS Config rule. Required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_name ConfigOrganizationConfigRule#organization_config_rule_name}

---

##### `ExcludedAccounts`<sup>Optional</sup> <a name="ExcludedAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.excludedAccounts"></a>

```go
ExcludedAccounts *[]*string
```

- *Type:* *[]*string

A comma-separated list of accounts that you want to exclude from an organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#excluded_accounts ConfigOrganizationConfigRule#excluded_accounts}

---

##### `OrganizationCustomPolicyRuleMetadata`<sup>Optional</sup> <a name="OrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomPolicyRuleMetadata"></a>

```go
OrganizationCustomPolicyRuleMetadata ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata</a>

This object specifies metadata for your organization's AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_policy_rule_metadata ConfigOrganizationConfigRule#organization_custom_policy_rule_metadata}

---

##### `OrganizationCustomRuleMetadata`<sup>Optional</sup> <a name="OrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationCustomRuleMetadata"></a>

```go
OrganizationCustomRuleMetadata ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata">ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata</a>

This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_custom_rule_metadata ConfigOrganizationConfigRule#organization_custom_rule_metadata}

---

##### `OrganizationManagedRuleMetadata`<sup>Optional</sup> <a name="OrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleConfig.property.organizationManagedRuleMetadata"></a>

```go
OrganizationManagedRuleMetadata ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata">ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata</a>

This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_managed_rule_metadata ConfigOrganizationConfigRule#organization_managed_rule_metadata}

---

### ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

&configorganizationconfigrule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata {
	DebugLogDeliveryAccounts: *[]*string,
	Description: *string,
	InputParameters: *string,
	OrganizationConfigRuleTriggerTypes: *[]*string,
	PolicyText: *string,
	ResourceIdScope: *string,
	ResourceTypesScope: *[]*string,
	Runtime: *string,
	TagKeyScope: *string,
	TagValueScope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.debugLogDeliveryAccounts">DebugLogDeliveryAccounts</a></code> | <code>*[]*string</code> | A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.description">Description</a></code> | <code>*string</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.inputParameters">InputParameters</a></code> | <code>*string</code> | A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.organizationConfigRuleTriggerTypes">OrganizationConfigRuleTriggerTypes</a></code> | <code>*[]*string</code> | The type of notification that initiates AWS Config to run an evaluation for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.policyText">PolicyText</a></code> | <code>*string</code> | The policy definition containing the logic for your organization AWS Config Custom Policy rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.runtime">Runtime</a></code> | <code>*string</code> | The runtime system for your organization AWS Config Custom Policy rules. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | The optional part of a key-value pair that make up a tag. |

---

##### `DebugLogDeliveryAccounts`<sup>Optional</sup> <a name="DebugLogDeliveryAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.debugLogDeliveryAccounts"></a>

```go
DebugLogDeliveryAccounts *[]*string
```

- *Type:* *[]*string

A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#debug_log_delivery_accounts ConfigOrganizationConfigRule#debug_log_delivery_accounts}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.inputParameters"></a>

```go
InputParameters *string
```

- *Type:* *string

A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `OrganizationConfigRuleTriggerTypes`<sup>Optional</sup> <a name="OrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.organizationConfigRuleTriggerTypes"></a>

```go
OrganizationConfigRuleTriggerTypes *[]*string
```

- *Type:* *[]*string

The type of notification that initiates AWS Config to run an evaluation for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types ConfigOrganizationConfigRule#organization_config_rule_trigger_types}

---

##### `PolicyText`<sup>Optional</sup> <a name="PolicyText" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.policyText"></a>

```go
PolicyText *string
```

- *Type:* *string

The policy definition containing the logic for your organization AWS Config Custom Policy rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#policy_text ConfigOrganizationConfigRule#policy_text}

---

##### `ResourceIdScope`<sup>Optional</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceIdScope"></a>

```go
ResourceIdScope *string
```

- *Type:* *string

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `ResourceTypesScope`<sup>Optional</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.resourceTypesScope"></a>

```go
ResourceTypesScope *[]*string
```

- *Type:* *[]*string

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `Runtime`<sup>Optional</sup> <a name="Runtime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.runtime"></a>

```go
Runtime *string
```

- *Type:* *string

The runtime system for your organization AWS Config Custom Policy rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#runtime ConfigOrganizationConfigRule#runtime}

---

##### `TagKeyScope`<sup>Optional</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagKeyScope"></a>

```go
TagKeyScope *string
```

- *Type:* *string

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `TagValueScope`<sup>Optional</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadata.property.tagValueScope"></a>

```go
TagValueScope *string
```

- *Type:* *string

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

### ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

&configorganizationconfigrule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata {
	Description: *string,
	InputParameters: *string,
	LambdaFunctionArn: *string,
	MaximumExecutionFrequency: *string,
	OrganizationConfigRuleTriggerTypes: *[]*string,
	ResourceIdScope: *string,
	ResourceTypesScope: *[]*string,
	TagKeyScope: *string,
	TagValueScope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.description">Description</a></code> | <code>*string</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.inputParameters">InputParameters</a></code> | <code>*string</code> | A string, in JSON format, that is passed to your organization AWS Config rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>*string</code> | The lambda function ARN. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | The maximum frequency with which AWS Config runs evaluations for a rule.Allowed values: One_Hour \| Three_Hours \| Six_Hours \| Twelve_Hours \| TwentyFour_Hours. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.organizationConfigRuleTriggerTypes">OrganizationConfigRuleTriggerTypes</a></code> | <code>*[]*string</code> | The type of notification that triggers AWS Config to run an evaluation for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | The optional part of a key-value pair that make up a tag. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.inputParameters"></a>

```go
InputParameters *string
```

- *Type:* *string

A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `LambdaFunctionArn`<sup>Optional</sup> <a name="LambdaFunctionArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.lambdaFunctionArn"></a>

```go
LambdaFunctionArn *string
```

- *Type:* *string

The lambda function ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#lambda_function_arn ConfigOrganizationConfigRule#lambda_function_arn}

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.maximumExecutionFrequency"></a>

```go
MaximumExecutionFrequency *string
```

- *Type:* *string

The maximum frequency with which AWS Config runs evaluations for a rule.Allowed values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#maximum_execution_frequency ConfigOrganizationConfigRule#maximum_execution_frequency}

---

##### `OrganizationConfigRuleTriggerTypes`<sup>Optional</sup> <a name="OrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.organizationConfigRuleTriggerTypes"></a>

```go
OrganizationConfigRuleTriggerTypes *[]*string
```

- *Type:* *[]*string

The type of notification that triggers AWS Config to run an evaluation for a rule.

You can specify the following notification types:

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#organization_config_rule_trigger_types ConfigOrganizationConfigRule#organization_config_rule_trigger_types}

---

##### `ResourceIdScope`<sup>Optional</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceIdScope"></a>

```go
ResourceIdScope *string
```

- *Type:* *string

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `ResourceTypesScope`<sup>Optional</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.resourceTypesScope"></a>

```go
ResourceTypesScope *[]*string
```

- *Type:* *[]*string

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `TagKeyScope`<sup>Optional</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagKeyScope"></a>

```go
TagKeyScope *string
```

- *Type:* *string

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `TagValueScope`<sup>Optional</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadata.property.tagValueScope"></a>

```go
TagValueScope *string
```

- *Type:* *string

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

### ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata <a name="ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

&configorganizationconfigrule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata {
	Description: *string,
	InputParameters: *string,
	MaximumExecutionFrequency: *string,
	ResourceIdScope: *string,
	ResourceTypesScope: *[]*string,
	RuleIdentifier: *string,
	TagKeyScope: *string,
	TagValueScope: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.description">Description</a></code> | <code>*string</code> | The description that you provide for your organization AWS Config rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.inputParameters">InputParameters</a></code> | <code>*string</code> | A string, in JSON format, that is passed to your organization AWS Config rule Lambda function. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | The maximum frequency with which AWS Config runs evaluations for a rule. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | The ID of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | The type of the AWS resource that was evaluated. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.ruleIdentifier">RuleIdentifier</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | One part of a key-value pair that make up a tag. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | The optional part of a key-value pair that make up a tag. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description that you provide for your organization AWS Config rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#description ConfigOrganizationConfigRule#description}

---

##### `InputParameters`<sup>Optional</sup> <a name="InputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.inputParameters"></a>

```go
InputParameters *string
```

- *Type:* *string

A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#input_parameters ConfigOrganizationConfigRule#input_parameters}

---

##### `MaximumExecutionFrequency`<sup>Optional</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.maximumExecutionFrequency"></a>

```go
MaximumExecutionFrequency *string
```

- *Type:* *string

The maximum frequency with which AWS Config runs evaluations for a rule.

Valid Values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#maximum_execution_frequency ConfigOrganizationConfigRule#maximum_execution_frequency}

---

##### `ResourceIdScope`<sup>Optional</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceIdScope"></a>

```go
ResourceIdScope *string
```

- *Type:* *string

The ID of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_id_scope ConfigOrganizationConfigRule#resource_id_scope}

---

##### `ResourceTypesScope`<sup>Optional</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.resourceTypesScope"></a>

```go
ResourceTypesScope *[]*string
```

- *Type:* *[]*string

The type of the AWS resource that was evaluated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#resource_types_scope ConfigOrganizationConfigRule#resource_types_scope}

---

##### `RuleIdentifier`<sup>Optional</sup> <a name="RuleIdentifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.ruleIdentifier"></a>

```go
RuleIdentifier *string
```

- *Type:* *string

Required.

For organization config managed rules, a predefined identifier from a list. For example, IAM_PASSWORD_POLICY is a managed rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#rule_identifier ConfigOrganizationConfigRule#rule_identifier}

---

##### `TagKeyScope`<sup>Optional</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagKeyScope"></a>

```go
TagKeyScope *string
```

- *Type:* *string

One part of a key-value pair that make up a tag.

A key is a general label that acts like a category for more specific tag values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_key_scope ConfigOrganizationConfigRule#tag_key_scope}

---

##### `TagValueScope`<sup>Optional</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadata.property.tagValueScope"></a>

```go
TagValueScope *string
```

- *Type:* *string

The optional part of a key-value pair that make up a tag.

A value acts as a descriptor within a tag category (key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/config_organization_config_rule#tag_value_scope ConfigOrganizationConfigRule#tag_value_scope}

---

## Classes <a name="Classes" id="Classes"></a>

### ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

configorganizationconfigrule.NewConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDebugLogDeliveryAccounts">ResetDebugLogDeliveryAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes">ResetOrganizationConfigRuleTriggerTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetPolicyText">ResetPolicyText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceIdScope">ResetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceTypesScope">ResetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetRuntime">ResetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagKeyScope">ResetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagValueScope">ResetTagValueScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDebugLogDeliveryAccounts` <a name="ResetDebugLogDeliveryAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDebugLogDeliveryAccounts"></a>

```go
func ResetDebugLogDeliveryAccounts()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetInputParameters"></a>

```go
func ResetInputParameters()
```

##### `ResetOrganizationConfigRuleTriggerTypes` <a name="ResetOrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes"></a>

```go
func ResetOrganizationConfigRuleTriggerTypes()
```

##### `ResetPolicyText` <a name="ResetPolicyText" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetPolicyText"></a>

```go
func ResetPolicyText()
```

##### `ResetResourceIdScope` <a name="ResetResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceIdScope"></a>

```go
func ResetResourceIdScope()
```

##### `ResetResourceTypesScope` <a name="ResetResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetResourceTypesScope"></a>

```go
func ResetResourceTypesScope()
```

##### `ResetRuntime` <a name="ResetRuntime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetRuntime"></a>

```go
func ResetRuntime()
```

##### `ResetTagKeyScope` <a name="ResetTagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagKeyScope"></a>

```go
func ResetTagKeyScope()
```

##### `ResetTagValueScope` <a name="ResetTagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.resetTagValueScope"></a>

```go
func ResetTagValueScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccountsInput">DebugLogDeliveryAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParametersInput">InputParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput">OrganizationConfigRuleTriggerTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyTextInput">PolicyTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScopeInput">ResourceIdScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScopeInput">ResourceTypesScopeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtimeInput">RuntimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScopeInput">TagKeyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScopeInput">TagValueScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts">DebugLogDeliveryAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters">InputParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">OrganizationConfigRuleTriggerTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText">PolicyText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime">Runtime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DebugLogDeliveryAccountsInput`<sup>Optional</sup> <a name="DebugLogDeliveryAccountsInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccountsInput"></a>

```go
func DebugLogDeliveryAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParametersInput"></a>

```go
func InputParametersInput() *string
```

- *Type:* *string

---

##### `OrganizationConfigRuleTriggerTypesInput`<sup>Optional</sup> <a name="OrganizationConfigRuleTriggerTypesInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput"></a>

```go
func OrganizationConfigRuleTriggerTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyTextInput`<sup>Optional</sup> <a name="PolicyTextInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyTextInput"></a>

```go
func PolicyTextInput() *string
```

- *Type:* *string

---

##### `ResourceIdScopeInput`<sup>Optional</sup> <a name="ResourceIdScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```go
func ResourceIdScopeInput() *string
```

- *Type:* *string

---

##### `ResourceTypesScopeInput`<sup>Optional</sup> <a name="ResourceTypesScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```go
func ResourceTypesScopeInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuntimeInput`<sup>Optional</sup> <a name="RuntimeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtimeInput"></a>

```go
func RuntimeInput() *string
```

- *Type:* *string

---

##### `TagKeyScopeInput`<sup>Optional</sup> <a name="TagKeyScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```go
func TagKeyScopeInput() *string
```

- *Type:* *string

---

##### `TagValueScopeInput`<sup>Optional</sup> <a name="TagValueScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```go
func TagValueScopeInput() *string
```

- *Type:* *string

---

##### `DebugLogDeliveryAccounts`<sup>Required</sup> <a name="DebugLogDeliveryAccounts" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.debugLogDeliveryAccounts"></a>

```go
func DebugLogDeliveryAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.inputParameters"></a>

```go
func InputParameters() *string
```

- *Type:* *string

---

##### `OrganizationConfigRuleTriggerTypes`<sup>Required</sup> <a name="OrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```go
func OrganizationConfigRuleTriggerTypes() *[]*string
```

- *Type:* *[]*string

---

##### `PolicyText`<sup>Required</sup> <a name="PolicyText" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.policyText"></a>

```go
func PolicyText() *string
```

- *Type:* *string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceIdScope"></a>

```go
func ResourceIdScope() *string
```

- *Type:* *string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.resourceTypesScope"></a>

```go
func ResourceTypesScope() *[]*string
```

- *Type:* *[]*string

---

##### `Runtime`<sup>Required</sup> <a name="Runtime" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.runtime"></a>

```go
func Runtime() *string
```

- *Type:* *string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagKeyScope"></a>

```go
func TagKeyScope() *string
```

- *Type:* *string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.tagValueScope"></a>

```go
func TagValueScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomPolicyRuleMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

configorganizationconfigrule.NewConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetLambdaFunctionArn">ResetLambdaFunctionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes">ResetOrganizationConfigRuleTriggerTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceIdScope">ResetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceTypesScope">ResetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagKeyScope">ResetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagValueScope">ResetTagValueScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetInputParameters"></a>

```go
func ResetInputParameters()
```

##### `ResetLambdaFunctionArn` <a name="ResetLambdaFunctionArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetLambdaFunctionArn"></a>

```go
func ResetLambdaFunctionArn()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetMaximumExecutionFrequency"></a>

```go
func ResetMaximumExecutionFrequency()
```

##### `ResetOrganizationConfigRuleTriggerTypes` <a name="ResetOrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetOrganizationConfigRuleTriggerTypes"></a>

```go
func ResetOrganizationConfigRuleTriggerTypes()
```

##### `ResetResourceIdScope` <a name="ResetResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceIdScope"></a>

```go
func ResetResourceIdScope()
```

##### `ResetResourceTypesScope` <a name="ResetResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetResourceTypesScope"></a>

```go
func ResetResourceTypesScope()
```

##### `ResetTagKeyScope` <a name="ResetTagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagKeyScope"></a>

```go
func ResetTagKeyScope()
```

##### `ResetTagValueScope` <a name="ResetTagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.resetTagValueScope"></a>

```go
func ResetTagValueScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParametersInput">InputParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArnInput">LambdaFunctionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput">OrganizationConfigRuleTriggerTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScopeInput">ResourceIdScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScopeInput">ResourceTypesScopeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScopeInput">TagKeyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScopeInput">TagValueScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters">InputParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn">LambdaFunctionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes">OrganizationConfigRuleTriggerTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParametersInput"></a>

```go
func InputParametersInput() *string
```

- *Type:* *string

---

##### `LambdaFunctionArnInput`<sup>Optional</sup> <a name="LambdaFunctionArnInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArnInput"></a>

```go
func LambdaFunctionArnInput() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequencyInput"></a>

```go
func MaximumExecutionFrequencyInput() *string
```

- *Type:* *string

---

##### `OrganizationConfigRuleTriggerTypesInput`<sup>Optional</sup> <a name="OrganizationConfigRuleTriggerTypesInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypesInput"></a>

```go
func OrganizationConfigRuleTriggerTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceIdScopeInput`<sup>Optional</sup> <a name="ResourceIdScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```go
func ResourceIdScopeInput() *string
```

- *Type:* *string

---

##### `ResourceTypesScopeInput`<sup>Optional</sup> <a name="ResourceTypesScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```go
func ResourceTypesScopeInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagKeyScopeInput`<sup>Optional</sup> <a name="TagKeyScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```go
func TagKeyScopeInput() *string
```

- *Type:* *string

---

##### `TagValueScopeInput`<sup>Optional</sup> <a name="TagValueScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```go
func TagValueScopeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.inputParameters"></a>

```go
func InputParameters() *string
```

- *Type:* *string

---

##### `LambdaFunctionArn`<sup>Required</sup> <a name="LambdaFunctionArn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.lambdaFunctionArn"></a>

```go
func LambdaFunctionArn() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```go
func MaximumExecutionFrequency() *string
```

- *Type:* *string

---

##### `OrganizationConfigRuleTriggerTypes`<sup>Required</sup> <a name="OrganizationConfigRuleTriggerTypes" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.organizationConfigRuleTriggerTypes"></a>

```go
func OrganizationConfigRuleTriggerTypes() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceIdScope"></a>

```go
func ResourceIdScope() *string
```

- *Type:* *string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.resourceTypesScope"></a>

```go
func ResourceTypesScope() *[]*string
```

- *Type:* *[]*string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagKeyScope"></a>

```go
func TagKeyScope() *string
```

- *Type:* *string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.tagValueScope"></a>

```go
func TagValueScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationCustomRuleMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference <a name="ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/configorganizationconfigrule"

configorganizationconfigrule.NewConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetInputParameters">ResetInputParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetMaximumExecutionFrequency">ResetMaximumExecutionFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceIdScope">ResetResourceIdScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceTypesScope">ResetResourceTypesScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetRuleIdentifier">ResetRuleIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagKeyScope">ResetTagKeyScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagValueScope">ResetTagValueScope</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInputParameters` <a name="ResetInputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetInputParameters"></a>

```go
func ResetInputParameters()
```

##### `ResetMaximumExecutionFrequency` <a name="ResetMaximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetMaximumExecutionFrequency"></a>

```go
func ResetMaximumExecutionFrequency()
```

##### `ResetResourceIdScope` <a name="ResetResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceIdScope"></a>

```go
func ResetResourceIdScope()
```

##### `ResetResourceTypesScope` <a name="ResetResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetResourceTypesScope"></a>

```go
func ResetResourceTypesScope()
```

##### `ResetRuleIdentifier` <a name="ResetRuleIdentifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetRuleIdentifier"></a>

```go
func ResetRuleIdentifier()
```

##### `ResetTagKeyScope` <a name="ResetTagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagKeyScope"></a>

```go
func ResetTagKeyScope()
```

##### `ResetTagValueScope` <a name="ResetTagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.resetTagValueScope"></a>

```go
func ResetTagValueScope()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParametersInput">InputParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequencyInput">MaximumExecutionFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScopeInput">ResourceIdScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScopeInput">ResourceTypesScopeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifierInput">RuleIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScopeInput">TagKeyScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScopeInput">TagValueScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters">InputParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency">MaximumExecutionFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope">ResourceIdScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope">ResourceTypesScope</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier">RuleIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope">TagKeyScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope">TagValueScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InputParametersInput`<sup>Optional</sup> <a name="InputParametersInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParametersInput"></a>

```go
func InputParametersInput() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequencyInput`<sup>Optional</sup> <a name="MaximumExecutionFrequencyInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequencyInput"></a>

```go
func MaximumExecutionFrequencyInput() *string
```

- *Type:* *string

---

##### `ResourceIdScopeInput`<sup>Optional</sup> <a name="ResourceIdScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScopeInput"></a>

```go
func ResourceIdScopeInput() *string
```

- *Type:* *string

---

##### `ResourceTypesScopeInput`<sup>Optional</sup> <a name="ResourceTypesScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScopeInput"></a>

```go
func ResourceTypesScopeInput() *[]*string
```

- *Type:* *[]*string

---

##### `RuleIdentifierInput`<sup>Optional</sup> <a name="RuleIdentifierInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifierInput"></a>

```go
func RuleIdentifierInput() *string
```

- *Type:* *string

---

##### `TagKeyScopeInput`<sup>Optional</sup> <a name="TagKeyScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScopeInput"></a>

```go
func TagKeyScopeInput() *string
```

- *Type:* *string

---

##### `TagValueScopeInput`<sup>Optional</sup> <a name="TagValueScopeInput" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScopeInput"></a>

```go
func TagValueScopeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.inputParameters"></a>

```go
func InputParameters() *string
```

- *Type:* *string

---

##### `MaximumExecutionFrequency`<sup>Required</sup> <a name="MaximumExecutionFrequency" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.maximumExecutionFrequency"></a>

```go
func MaximumExecutionFrequency() *string
```

- *Type:* *string

---

##### `ResourceIdScope`<sup>Required</sup> <a name="ResourceIdScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceIdScope"></a>

```go
func ResourceIdScope() *string
```

- *Type:* *string

---

##### `ResourceTypesScope`<sup>Required</sup> <a name="ResourceTypesScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.resourceTypesScope"></a>

```go
func ResourceTypesScope() *[]*string
```

- *Type:* *[]*string

---

##### `RuleIdentifier`<sup>Required</sup> <a name="RuleIdentifier" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.ruleIdentifier"></a>

```go
func RuleIdentifier() *string
```

- *Type:* *string

---

##### `TagKeyScope`<sup>Required</sup> <a name="TagKeyScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagKeyScope"></a>

```go
func TagKeyScope() *string
```

- *Type:* *string

---

##### `TagValueScope`<sup>Required</sup> <a name="TagValueScope" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.tagValueScope"></a>

```go
func TagValueScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.configOrganizationConfigRule.ConfigOrganizationConfigRuleOrganizationManagedRuleMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



