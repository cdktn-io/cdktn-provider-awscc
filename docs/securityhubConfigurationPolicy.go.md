# `securityhubConfigurationPolicy` Submodule <a name="`securityhubConfigurationPolicy` Submodule" id="@cdktn/provider-awscc.securityhubConfigurationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubConfigurationPolicy <a name="SecurityhubConfigurationPolicy" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy awscc_securityhub_configuration_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicy(scope Construct, id *string, config SecurityhubConfigurationPolicyConfig) SecurityhubConfigurationPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig">SecurityhubConfigurationPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig">SecurityhubConfigurationPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy">PutConfigurationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfigurationPolicy` <a name="PutConfigurationPolicy" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy"></a>

```go
func PutConfigurationPolicy(value SecurityhubConfigurationPolicyConfigurationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.putConfigurationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubConfigurationPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.SecurityhubConfigurationPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.SecurityhubConfigurationPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.SecurityhubConfigurationPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.SecurityhubConfigurationPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityhubConfigurationPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityhubConfigurationPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityhubConfigurationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubConfigurationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicy">ConfigurationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference">SecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyId">ConfigurationPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.serviceEnabled">ServiceEnabled</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyInput">ConfigurationPolicyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ConfigurationPolicy`<sup>Required</sup> <a name="ConfigurationPolicy" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicy"></a>

```go
func ConfigurationPolicy() SecurityhubConfigurationPolicyConfigurationPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference">SecurityhubConfigurationPolicyConfigurationPolicyOutputReference</a>

---

##### `ConfigurationPolicyId`<sup>Required</sup> <a name="ConfigurationPolicyId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyId"></a>

```go
func ConfigurationPolicyId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ServiceEnabled`<sup>Required</sup> <a name="ServiceEnabled" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.serviceEnabled"></a>

```go
func ServiceEnabled() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ConfigurationPolicyInput`<sup>Optional</sup> <a name="ConfigurationPolicyInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.configurationPolicyInput"></a>

```go
func ConfigurationPolicyInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubConfigurationPolicyConfig <a name="SecurityhubConfigurationPolicyConfig" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConfigurationPolicy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy,
	Name: *string,
	Description: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.configurationPolicy">ConfigurationPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a></code> | An object that defines how Security Hub is configured. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.description">Description</a></code> | <code>*string</code> | The description of the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationPolicy`<sup>Required</sup> <a name="ConfigurationPolicy" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.configurationPolicy"></a>

```go
ConfigurationPolicy SecurityhubConfigurationPolicyConfigurationPolicy
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy">SecurityhubConfigurationPolicyConfigurationPolicy</a>

An object that defines how Security Hub is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#configuration_policy SecurityhubConfigurationPolicy#configuration_policy}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#name SecurityhubConfigurationPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#description SecurityhubConfigurationPolicy#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#tags SecurityhubConfigurationPolicy#tags}

---

### SecurityhubConfigurationPolicyConfigurationPolicy <a name="SecurityhubConfigurationPolicyConfigurationPolicy" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicy {
	SecurityHub: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.securityHub">SecurityHub</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub">SecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a></code> | An object that defines how AWS Security Hub is configured. |

---

##### `SecurityHub`<sup>Optional</sup> <a name="SecurityHub" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicy.property.securityHub"></a>

```go
SecurityHub SecurityhubConfigurationPolicyConfigurationPolicySecurityHub
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub">SecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a>

An object that defines how AWS Security Hub is configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#security_hub SecurityhubConfigurationPolicy#security_hub}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityHub <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHub" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub {
	EnabledStandardIdentifiers: *[]*string,
	SecurityControlsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration,
	ServiceEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.enabledStandardIdentifiers">EnabledStandardIdentifiers</a></code> | <code>*[]*string</code> | A list that defines which security standards are enabled in the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.securityControlsConfiguration">SecurityControlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a></code> | An object that defines which security controls are enabled in an AWS Security Hub configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.serviceEnabled">ServiceEnabled</a></code> | <code>interface{}</code> | Indicates whether Security Hub is enabled in the policy. |

---

##### `EnabledStandardIdentifiers`<sup>Optional</sup> <a name="EnabledStandardIdentifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.enabledStandardIdentifiers"></a>

```go
EnabledStandardIdentifiers *[]*string
```

- *Type:* *[]*string

A list that defines which security standards are enabled in the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#enabled_standard_identifiers SecurityhubConfigurationPolicy#enabled_standard_identifiers}

---

##### `SecurityControlsConfiguration`<sup>Optional</sup> <a name="SecurityControlsConfiguration" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.securityControlsConfiguration"></a>

```go
SecurityControlsConfiguration SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a>

An object that defines which security controls are enabled in an AWS Security Hub configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#security_controls_configuration SecurityhubConfigurationPolicy#security_controls_configuration}

---

##### `ServiceEnabled`<sup>Optional</sup> <a name="ServiceEnabled" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub.property.serviceEnabled"></a>

```go
ServiceEnabled interface{}
```

- *Type:* interface{}

Indicates whether Security Hub is enabled in the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#service_enabled SecurityhubConfigurationPolicy#service_enabled}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration {
	DisabledSecurityControlIdentifiers: *[]*string,
	EnabledSecurityControlIdentifiers: *[]*string,
	SecurityControlCustomParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.disabledSecurityControlIdentifiers">DisabledSecurityControlIdentifiers</a></code> | <code>*[]*string</code> | A list of security controls that are disabled in the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.enabledSecurityControlIdentifiers">EnabledSecurityControlIdentifiers</a></code> | <code>*[]*string</code> | A list of security controls that are enabled in the configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.securityControlCustomParameters">SecurityControlCustomParameters</a></code> | <code>interface{}</code> | A list of security controls and control parameter values that are included in a configuration policy. |

---

##### `DisabledSecurityControlIdentifiers`<sup>Optional</sup> <a name="DisabledSecurityControlIdentifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.disabledSecurityControlIdentifiers"></a>

```go
DisabledSecurityControlIdentifiers *[]*string
```

- *Type:* *[]*string

A list of security controls that are disabled in the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#disabled_security_control_identifiers SecurityhubConfigurationPolicy#disabled_security_control_identifiers}

---

##### `EnabledSecurityControlIdentifiers`<sup>Optional</sup> <a name="EnabledSecurityControlIdentifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.enabledSecurityControlIdentifiers"></a>

```go
EnabledSecurityControlIdentifiers *[]*string
```

- *Type:* *[]*string

A list of security controls that are enabled in the configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#enabled_security_control_identifiers SecurityhubConfigurationPolicy#enabled_security_control_identifiers}

---

##### `SecurityControlCustomParameters`<sup>Optional</sup> <a name="SecurityControlCustomParameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration.property.securityControlCustomParameters"></a>

```go
SecurityControlCustomParameters interface{}
```

- *Type:* interface{}

A list of security controls and control parameter values that are included in a configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#security_control_custom_parameters SecurityhubConfigurationPolicy#security_control_custom_parameters}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters {
	Parameters: interface{},
	SecurityControlId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.property.parameters">Parameters</a></code> | <code>interface{}</code> | An object that specifies parameter values for a control in a configuration policy. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.property.securityControlId">SecurityControlId</a></code> | <code>*string</code> | The ID of the security control. |

---

##### `Parameters`<sup>Optional</sup> <a name="Parameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

An object that specifies parameter values for a control in a configuration policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#parameters SecurityhubConfigurationPolicy#parameters}

---

##### `SecurityControlId`<sup>Optional</sup> <a name="SecurityControlId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParameters.property.securityControlId"></a>

```go
SecurityControlId *string
```

- *Type:* *string

The ID of the security control.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#security_control_id SecurityhubConfigurationPolicy#security_control_id}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters {
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a></code> | An object that includes the data type of a security control parameter and its current value. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.property.valueType">ValueType</a></code> | <code>*string</code> | Identifies whether a control parameter uses a custom user-defined value or subscribes to the default AWS Security Hub behavior. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.property.value"></a>

```go
Value SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a>

An object that includes the data type of a security control parameter and its current value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#value SecurityhubConfigurationPolicy#value}

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParameters.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Identifies whether a control parameter uses a custom user-defined value or subscribes to the default AWS Security Hub behavior.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#value_type SecurityhubConfigurationPolicy#value_type}

---

### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

&securityhubconfigurationpolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue {
	Boolean: interface{},
	Double: *f64,
	Enum: *string,
	EnumList: *[]*string,
	Integer: *f64,
	IntegerList: *[]*f64,
	String: *string,
	StringList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.boolean">Boolean</a></code> | <code>interface{}</code> | A control parameter that is a boolean. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.double">Double</a></code> | <code>*f64</code> | A control parameter that is a double. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.enum">Enum</a></code> | <code>*string</code> | A control parameter that is an enum. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.enumList">EnumList</a></code> | <code>*[]*string</code> | A control parameter that is a list of enums. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.integer">Integer</a></code> | <code>*f64</code> | A control parameter that is an integer. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.integerList">IntegerList</a></code> | <code>*[]*f64</code> | A control parameter that is a list of integers. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.string">String</a></code> | <code>*string</code> | A control parameter that is a string. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.stringList">StringList</a></code> | <code>*[]*string</code> | A control parameter that is a list of strings. |

---

##### `Boolean`<sup>Optional</sup> <a name="Boolean" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.boolean"></a>

```go
Boolean interface{}
```

- *Type:* interface{}

A control parameter that is a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#boolean SecurityhubConfigurationPolicy#boolean}

---

##### `Double`<sup>Optional</sup> <a name="Double" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.double"></a>

```go
Double *f64
```

- *Type:* *f64

A control parameter that is a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#double SecurityhubConfigurationPolicy#double}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.enum"></a>

```go
Enum *string
```

- *Type:* *string

A control parameter that is an enum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#enum SecurityhubConfigurationPolicy#enum}

---

##### `EnumList`<sup>Optional</sup> <a name="EnumList" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.enumList"></a>

```go
EnumList *[]*string
```

- *Type:* *[]*string

A control parameter that is a list of enums.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#enum_list SecurityhubConfigurationPolicy#enum_list}

---

##### `Integer`<sup>Optional</sup> <a name="Integer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.integer"></a>

```go
Integer *f64
```

- *Type:* *f64

A control parameter that is an integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#integer SecurityhubConfigurationPolicy#integer}

---

##### `IntegerList`<sup>Optional</sup> <a name="IntegerList" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.integerList"></a>

```go
IntegerList *[]*f64
```

- *Type:* *[]*f64

A control parameter that is a list of integers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#integer_list SecurityhubConfigurationPolicy#integer_list}

---

##### `String`<sup>Optional</sup> <a name="String" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.string"></a>

```go
String *string
```

- *Type:* *string

A control parameter that is a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#string SecurityhubConfigurationPolicy#string}

---

##### `StringList`<sup>Optional</sup> <a name="StringList" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue.property.stringList"></a>

```go
StringList *[]*string
```

- *Type:* *[]*string

A control parameter that is a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securityhub_configuration_policy#string_list SecurityhubConfigurationPolicy#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubConfigurationPolicyConfigurationPolicyOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicyOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityHub">PutSecurityHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetSecurityHub">ResetSecurityHub</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecurityHub` <a name="PutSecurityHub" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityHub"></a>

```go
func PutSecurityHub(value SecurityhubConfigurationPolicyConfigurationPolicySecurityHub)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.putSecurityHub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHub">SecurityhubConfigurationPolicyConfigurationPolicySecurityHub</a>

---

##### `ResetSecurityHub` <a name="ResetSecurityHub" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.resetSecurityHub"></a>

```go
func ResetSecurityHub()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHub">SecurityHub</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHubInput">SecurityHubInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityHub`<sup>Required</sup> <a name="SecurityHub" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHub"></a>

```go
func SecurityHub() SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference</a>

---

##### `SecurityHubInput`<sup>Optional</sup> <a name="SecurityHubInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.securityHubInput"></a>

```go
func SecurityHubInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.putSecurityControlsConfiguration">PutSecurityControlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetEnabledStandardIdentifiers">ResetEnabledStandardIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetSecurityControlsConfiguration">ResetSecurityControlsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetServiceEnabled">ResetServiceEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecurityControlsConfiguration` <a name="PutSecurityControlsConfiguration" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.putSecurityControlsConfiguration"></a>

```go
func PutSecurityControlsConfiguration(value SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.putSecurityControlsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfiguration</a>

---

##### `ResetEnabledStandardIdentifiers` <a name="ResetEnabledStandardIdentifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetEnabledStandardIdentifiers"></a>

```go
func ResetEnabledStandardIdentifiers()
```

##### `ResetSecurityControlsConfiguration` <a name="ResetSecurityControlsConfiguration" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetSecurityControlsConfiguration"></a>

```go
func ResetSecurityControlsConfiguration()
```

##### `ResetServiceEnabled` <a name="ResetServiceEnabled" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.resetServiceEnabled"></a>

```go
func ResetServiceEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfiguration">SecurityControlsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiersInput">EnabledStandardIdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfigurationInput">SecurityControlsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabledInput">ServiceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiers">EnabledStandardIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabled">ServiceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityControlsConfiguration`<sup>Required</sup> <a name="SecurityControlsConfiguration" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfiguration"></a>

```go
func SecurityControlsConfiguration() SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference</a>

---

##### `EnabledStandardIdentifiersInput`<sup>Optional</sup> <a name="EnabledStandardIdentifiersInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiersInput"></a>

```go
func EnabledStandardIdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityControlsConfigurationInput`<sup>Optional</sup> <a name="SecurityControlsConfigurationInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.securityControlsConfigurationInput"></a>

```go
func SecurityControlsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceEnabledInput`<sup>Optional</sup> <a name="ServiceEnabledInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabledInput"></a>

```go
func ServiceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledStandardIdentifiers`<sup>Required</sup> <a name="EnabledStandardIdentifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.enabledStandardIdentifiers"></a>

```go
func EnabledStandardIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceEnabled`<sup>Required</sup> <a name="ServiceEnabled" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.serviceEnabled"></a>

```go
func ServiceEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.putSecurityControlCustomParameters">PutSecurityControlCustomParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetDisabledSecurityControlIdentifiers">ResetDisabledSecurityControlIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetEnabledSecurityControlIdentifiers">ResetEnabledSecurityControlIdentifiers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetSecurityControlCustomParameters">ResetSecurityControlCustomParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSecurityControlCustomParameters` <a name="PutSecurityControlCustomParameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.putSecurityControlCustomParameters"></a>

```go
func PutSecurityControlCustomParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.putSecurityControlCustomParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisabledSecurityControlIdentifiers` <a name="ResetDisabledSecurityControlIdentifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetDisabledSecurityControlIdentifiers"></a>

```go
func ResetDisabledSecurityControlIdentifiers()
```

##### `ResetEnabledSecurityControlIdentifiers` <a name="ResetEnabledSecurityControlIdentifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetEnabledSecurityControlIdentifiers"></a>

```go
func ResetEnabledSecurityControlIdentifiers()
```

##### `ResetSecurityControlCustomParameters` <a name="ResetSecurityControlCustomParameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.resetSecurityControlCustomParameters"></a>

```go
func ResetSecurityControlCustomParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParameters">SecurityControlCustomParameters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiersInput">DisabledSecurityControlIdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiersInput">EnabledSecurityControlIdentifiersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParametersInput">SecurityControlCustomParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiers">DisabledSecurityControlIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiers">EnabledSecurityControlIdentifiers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityControlCustomParameters`<sup>Required</sup> <a name="SecurityControlCustomParameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParameters"></a>

```go
func SecurityControlCustomParameters() SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList</a>

---

##### `DisabledSecurityControlIdentifiersInput`<sup>Optional</sup> <a name="DisabledSecurityControlIdentifiersInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiersInput"></a>

```go
func DisabledSecurityControlIdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledSecurityControlIdentifiersInput`<sup>Optional</sup> <a name="EnabledSecurityControlIdentifiersInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiersInput"></a>

```go
func EnabledSecurityControlIdentifiersInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityControlCustomParametersInput`<sup>Optional</sup> <a name="SecurityControlCustomParametersInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.securityControlCustomParametersInput"></a>

```go
func SecurityControlCustomParametersInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledSecurityControlIdentifiers`<sup>Required</sup> <a name="DisabledSecurityControlIdentifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.disabledSecurityControlIdentifiers"></a>

```go
func DisabledSecurityControlIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledSecurityControlIdentifiers`<sup>Required</sup> <a name="EnabledSecurityControlIdentifiers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.enabledSecurityControlIdentifiers"></a>

```go
func EnabledSecurityControlIdentifiers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get"></a>

```go
func Get(index *f64) SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resetParameters">ResetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resetSecurityControlId">ResetSecurityControlId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetParameters` <a name="ResetParameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resetParameters"></a>

```go
func ResetParameters()
```

##### `ResetSecurityControlId` <a name="ResetSecurityControlId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.resetSecurityControlId"></a>

```go
func ResetSecurityControlId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlIdInput">SecurityControlIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlId">SecurityControlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parameters"></a>

```go
func Parameters() SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap</a>

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityControlIdInput`<sup>Optional</sup> <a name="SecurityControlIdInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlIdInput"></a>

```go
func SecurityControlIdInput() *string
```

- *Type:* *string

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.securityControlId"></a>

```go
func SecurityControlId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get"></a>

```go
func Get(key *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue"></a>

```go
func PutValue(value SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValue</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.resetValueType"></a>

```go
func ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.value"></a>

```go
func Value() SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference">SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference <a name="SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubconfigurationpolicy"

securityhubconfigurationpolicy.NewSecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetBoolean">ResetBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetDouble">ResetDouble</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetEnumList">ResetEnumList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetInteger">ResetInteger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetIntegerList">ResetIntegerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetString">ResetString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetStringList">ResetStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolean` <a name="ResetBoolean" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetBoolean"></a>

```go
func ResetBoolean()
```

##### `ResetDouble` <a name="ResetDouble" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetDouble"></a>

```go
func ResetDouble()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetEnum"></a>

```go
func ResetEnum()
```

##### `ResetEnumList` <a name="ResetEnumList" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetEnumList"></a>

```go
func ResetEnumList()
```

##### `ResetInteger` <a name="ResetInteger" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetInteger"></a>

```go
func ResetInteger()
```

##### `ResetIntegerList` <a name="ResetIntegerList" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetIntegerList"></a>

```go
func ResetIntegerList()
```

##### `ResetString` <a name="ResetString" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetString"></a>

```go
func ResetString()
```

##### `ResetStringList` <a name="ResetStringList" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.resetStringList"></a>

```go
func ResetStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.booleanInput">BooleanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.doubleInput">DoubleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumInput">EnumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumListInput">EnumListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerInput">IntegerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerListInput">IntegerListInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringInput">StringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringListInput">StringListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.boolean">Boolean</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.double">Double</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enum">Enum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumList">EnumList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integer">Integer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerList">IntegerList</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.string">String</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringList">StringList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanInput`<sup>Optional</sup> <a name="BooleanInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.booleanInput"></a>

```go
func BooleanInput() interface{}
```

- *Type:* interface{}

---

##### `DoubleInput`<sup>Optional</sup> <a name="DoubleInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.doubleInput"></a>

```go
func DoubleInput() *f64
```

- *Type:* *f64

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumInput"></a>

```go
func EnumInput() *string
```

- *Type:* *string

---

##### `EnumListInput`<sup>Optional</sup> <a name="EnumListInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumListInput"></a>

```go
func EnumListInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntegerInput`<sup>Optional</sup> <a name="IntegerInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerInput"></a>

```go
func IntegerInput() *f64
```

- *Type:* *f64

---

##### `IntegerListInput`<sup>Optional</sup> <a name="IntegerListInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerListInput"></a>

```go
func IntegerListInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `StringInput`<sup>Optional</sup> <a name="StringInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringInput"></a>

```go
func StringInput() *string
```

- *Type:* *string

---

##### `StringListInput`<sup>Optional</sup> <a name="StringListInput" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringListInput"></a>

```go
func StringListInput() *[]*string
```

- *Type:* *[]*string

---

##### `Boolean`<sup>Required</sup> <a name="Boolean" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.boolean"></a>

```go
func Boolean() interface{}
```

- *Type:* interface{}

---

##### `Double`<sup>Required</sup> <a name="Double" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.double"></a>

```go
func Double() *f64
```

- *Type:* *f64

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enum"></a>

```go
func Enum() *string
```

- *Type:* *string

---

##### `EnumList`<sup>Required</sup> <a name="EnumList" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.enumList"></a>

```go
func EnumList() *[]*string
```

- *Type:* *[]*string

---

##### `Integer`<sup>Required</sup> <a name="Integer" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integer"></a>

```go
func Integer() *f64
```

- *Type:* *f64

---

##### `IntegerList`<sup>Required</sup> <a name="IntegerList" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.integerList"></a>

```go
func IntegerList() *[]*f64
```

- *Type:* *[]*f64

---

##### `String`<sup>Required</sup> <a name="String" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.string"></a>

```go
func String() *string
```

- *Type:* *string

---

##### `StringList`<sup>Required</sup> <a name="StringList" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.stringList"></a>

```go
func StringList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubConfigurationPolicy.SecurityhubConfigurationPolicyConfigurationPolicySecurityHubSecurityControlsConfigurationSecurityControlCustomParametersParametersValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



