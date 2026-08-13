# `securityhubSecurityControl` Submodule <a name="`securityhubSecurityControl` Submodule" id="@cdktn/provider-awscc.securityhubSecurityControl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecurityhubSecurityControl <a name="SecurityhubSecurityControl" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control awscc_securityhub_security_control}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubsecuritycontrol"

securityhubsecuritycontrol.NewSecurityhubSecurityControl(scope Construct, id *string, config SecurityhubSecurityControlConfig) SecurityhubSecurityControl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig">SecurityhubSecurityControlConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig">SecurityhubSecurityControlConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters">PutParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetLastUpdateReason">ResetLastUpdateReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlArn">ResetSecurityControlArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlId">ResetSecurityControlId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameters` <a name="PutParameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters"></a>

```go
func PutParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.putParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLastUpdateReason` <a name="ResetLastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetLastUpdateReason"></a>

```go
func ResetLastUpdateReason()
```

##### `ResetSecurityControlArn` <a name="ResetSecurityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlArn"></a>

```go
func ResetSecurityControlArn()
```

##### `ResetSecurityControlId` <a name="ResetSecurityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.resetSecurityControlId"></a>

```go
func ResetSecurityControlId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecurityhubSecurityControl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubsecuritycontrol"

securityhubsecuritycontrol.SecurityhubSecurityControl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubsecuritycontrol"

securityhubsecuritycontrol.SecurityhubSecurityControl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubsecuritycontrol"

securityhubsecuritycontrol.SecurityhubSecurityControl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubsecuritycontrol"

securityhubsecuritycontrol.SecurityhubSecurityControl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecurityhubSecurityControl resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecurityhubSecurityControl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecurityhubSecurityControl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecurityhubSecurityControl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parameters">Parameters</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap">SecurityhubSecurityControlParametersMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReasonInput">LastUpdateReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parametersInput">ParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArnInput">SecurityControlArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlIdInput">SecurityControlIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReason">LastUpdateReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArn">SecurityControlArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlId">SecurityControlId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parameters"></a>

```go
func Parameters() SecurityhubSecurityControlParametersMap
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap">SecurityhubSecurityControlParametersMap</a>

---

##### `LastUpdateReasonInput`<sup>Optional</sup> <a name="LastUpdateReasonInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReasonInput"></a>

```go
func LastUpdateReasonInput() *string
```

- *Type:* *string

---

##### `ParametersInput`<sup>Optional</sup> <a name="ParametersInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.parametersInput"></a>

```go
func ParametersInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityControlArnInput`<sup>Optional</sup> <a name="SecurityControlArnInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArnInput"></a>

```go
func SecurityControlArnInput() *string
```

- *Type:* *string

---

##### `SecurityControlIdInput`<sup>Optional</sup> <a name="SecurityControlIdInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlIdInput"></a>

```go
func SecurityControlIdInput() *string
```

- *Type:* *string

---

##### `LastUpdateReason`<sup>Required</sup> <a name="LastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.lastUpdateReason"></a>

```go
func LastUpdateReason() *string
```

- *Type:* *string

---

##### `SecurityControlArn`<sup>Required</sup> <a name="SecurityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlArn"></a>

```go
func SecurityControlArn() *string
```

- *Type:* *string

---

##### `SecurityControlId`<sup>Required</sup> <a name="SecurityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.securityControlId"></a>

```go
func SecurityControlId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecurityhubSecurityControlConfig <a name="SecurityhubSecurityControlConfig" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubsecuritycontrol"

&securityhubsecuritycontrol.SecurityhubSecurityControlConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Parameters: interface{},
	LastUpdateReason: *string,
	SecurityControlArn: *string,
	SecurityControlId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.parameters">Parameters</a></code> | <code>interface{}</code> | An object that identifies the name of a control parameter, its current value, and whether it has been customized. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lastUpdateReason">LastUpdateReason</a></code> | <code>*string</code> | The most recent reason for updating the customizable properties of a security control. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlArn">SecurityControlArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlId">SecurityControlId</a></code> | <code>*string</code> | The unique identifier of a security control across standards. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.parameters"></a>

```go
Parameters interface{}
```

- *Type:* interface{}

An object that identifies the name of a control parameter, its current value, and whether it has been customized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#parameters SecurityhubSecurityControl#parameters}

---

##### `LastUpdateReason`<sup>Optional</sup> <a name="LastUpdateReason" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.lastUpdateReason"></a>

```go
LastUpdateReason *string
```

- *Type:* *string

The most recent reason for updating the customizable properties of a security control.

This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#last_update_reason SecurityhubSecurityControl#last_update_reason}

---

##### `SecurityControlArn`<sup>Optional</sup> <a name="SecurityControlArn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlArn"></a>

```go
SecurityControlArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#security_control_arn SecurityhubSecurityControl#security_control_arn}

---

##### `SecurityControlId`<sup>Optional</sup> <a name="SecurityControlId" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlConfig.property.securityControlId"></a>

```go
SecurityControlId *string
```

- *Type:* *string

The unique identifier of a security control across standards.

Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#security_control_id SecurityhubSecurityControl#security_control_id}

---

### SecurityhubSecurityControlParameters <a name="SecurityhubSecurityControlParameters" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubsecuritycontrol"

&securityhubsecuritycontrol.SecurityhubSecurityControlParameters {
	Value: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue,
	ValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#value SecurityhubSecurityControl#value}. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.valueType">ValueType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#value_type SecurityhubSecurityControl#value_type}. |

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.value"></a>

```go
Value SecurityhubSecurityControlParametersValue
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#value SecurityhubSecurityControl#value}.

---

##### `ValueType`<sup>Optional</sup> <a name="ValueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParameters.property.valueType"></a>

```go
ValueType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#value_type SecurityhubSecurityControl#value_type}.

---

### SecurityhubSecurityControlParametersValue <a name="SecurityhubSecurityControlParametersValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubsecuritycontrol"

&securityhubsecuritycontrol.SecurityhubSecurityControlParametersValue {
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
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.boolean">Boolean</a></code> | <code>interface{}</code> | A control parameter that is a boolean. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.double">Double</a></code> | <code>*f64</code> | A control parameter that is a double. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enum">Enum</a></code> | <code>*string</code> | A control parameter that is a enum. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enumList">EnumList</a></code> | <code>*[]*string</code> | A control parameter that is a list of enums. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integer">Integer</a></code> | <code>*f64</code> | A control parameter that is a integer. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integerList">IntegerList</a></code> | <code>*[]*f64</code> | A control parameter that is a list of integers. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.string">String</a></code> | <code>*string</code> | A control parameter that is a string. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.stringList">StringList</a></code> | <code>*[]*string</code> | A control parameter that is a list of strings. |

---

##### `Boolean`<sup>Optional</sup> <a name="Boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.boolean"></a>

```go
Boolean interface{}
```

- *Type:* interface{}

A control parameter that is a boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#boolean SecurityhubSecurityControl#boolean}

---

##### `Double`<sup>Optional</sup> <a name="Double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.double"></a>

```go
Double *f64
```

- *Type:* *f64

A control parameter that is a double.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#double SecurityhubSecurityControl#double}

---

##### `Enum`<sup>Optional</sup> <a name="Enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enum"></a>

```go
Enum *string
```

- *Type:* *string

A control parameter that is a enum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#enum SecurityhubSecurityControl#enum}

---

##### `EnumList`<sup>Optional</sup> <a name="EnumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.enumList"></a>

```go
EnumList *[]*string
```

- *Type:* *[]*string

A control parameter that is a list of enums.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#enum_list SecurityhubSecurityControl#enum_list}

---

##### `Integer`<sup>Optional</sup> <a name="Integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integer"></a>

```go
Integer *f64
```

- *Type:* *f64

A control parameter that is a integer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#integer SecurityhubSecurityControl#integer}

---

##### `IntegerList`<sup>Optional</sup> <a name="IntegerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.integerList"></a>

```go
IntegerList *[]*f64
```

- *Type:* *[]*f64

A control parameter that is a list of integers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#integer_list SecurityhubSecurityControl#integer_list}

---

##### `String`<sup>Optional</sup> <a name="String" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.string"></a>

```go
String *string
```

- *Type:* *string

A control parameter that is a string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#string SecurityhubSecurityControl#string}

---

##### `StringList`<sup>Optional</sup> <a name="StringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue.property.stringList"></a>

```go
StringList *[]*string
```

- *Type:* *[]*string

A control parameter that is a list of strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/securityhub_security_control#string_list SecurityhubSecurityControl#string_list}

---

## Classes <a name="Classes" id="Classes"></a>

### SecurityhubSecurityControlParametersMap <a name="SecurityhubSecurityControlParametersMap" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubsecuritycontrol"

securityhubsecuritycontrol.NewSecurityhubSecurityControlParametersMap(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubSecurityControlParametersMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get"></a>

```go
func Get(key *string) SecurityhubSecurityControlParametersOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubSecurityControlParametersOutputReference <a name="SecurityhubSecurityControlParametersOutputReference" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubsecuritycontrol"

securityhubsecuritycontrol.NewSecurityhubSecurityControlParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) SecurityhubSecurityControlParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValueType">ResetValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue"></a>

```go
func PutValue(value SecurityhubSecurityControlParametersValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValue">SecurityhubSecurityControlParametersValue</a>

---

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValueType` <a name="ResetValueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.resetValueType"></a>

```go
func ResetValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.value">Value</a></code> | <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference">SecurityhubSecurityControlParametersValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueTypeInput">ValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueType">ValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.value"></a>

```go
func Value() SecurityhubSecurityControlParametersValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference">SecurityhubSecurityControlParametersValueOutputReference</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() interface{}
```

- *Type:* interface{}

---

##### `ValueTypeInput`<sup>Optional</sup> <a name="ValueTypeInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueTypeInput"></a>

```go
func ValueTypeInput() *string
```

- *Type:* *string

---

##### `ValueType`<sup>Required</sup> <a name="ValueType" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.valueType"></a>

```go
func ValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecurityhubSecurityControlParametersValueOutputReference <a name="SecurityhubSecurityControlParametersValueOutputReference" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securityhubsecuritycontrol"

securityhubsecuritycontrol.NewSecurityhubSecurityControlParametersValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecurityhubSecurityControlParametersValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetBoolean">ResetBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetDouble">ResetDouble</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnum">ResetEnum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnumList">ResetEnumList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetInteger">ResetInteger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetIntegerList">ResetIntegerList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetString">ResetString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetStringList">ResetStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolean` <a name="ResetBoolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetBoolean"></a>

```go
func ResetBoolean()
```

##### `ResetDouble` <a name="ResetDouble" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetDouble"></a>

```go
func ResetDouble()
```

##### `ResetEnum` <a name="ResetEnum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnum"></a>

```go
func ResetEnum()
```

##### `ResetEnumList` <a name="ResetEnumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetEnumList"></a>

```go
func ResetEnumList()
```

##### `ResetInteger` <a name="ResetInteger" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetInteger"></a>

```go
func ResetInteger()
```

##### `ResetIntegerList` <a name="ResetIntegerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetIntegerList"></a>

```go
func ResetIntegerList()
```

##### `ResetString` <a name="ResetString" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetString"></a>

```go
func ResetString()
```

##### `ResetStringList` <a name="ResetStringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.resetStringList"></a>

```go
func ResetStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.booleanInput">BooleanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.doubleInput">DoubleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumInput">EnumInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumListInput">EnumListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerInput">IntegerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerListInput">IntegerListInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringInput">StringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringListInput">StringListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.boolean">Boolean</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.double">Double</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enum">Enum</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumList">EnumList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integer">Integer</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerList">IntegerList</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.string">String</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringList">StringList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BooleanInput`<sup>Optional</sup> <a name="BooleanInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.booleanInput"></a>

```go
func BooleanInput() interface{}
```

- *Type:* interface{}

---

##### `DoubleInput`<sup>Optional</sup> <a name="DoubleInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.doubleInput"></a>

```go
func DoubleInput() *f64
```

- *Type:* *f64

---

##### `EnumInput`<sup>Optional</sup> <a name="EnumInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumInput"></a>

```go
func EnumInput() *string
```

- *Type:* *string

---

##### `EnumListInput`<sup>Optional</sup> <a name="EnumListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumListInput"></a>

```go
func EnumListInput() *[]*string
```

- *Type:* *[]*string

---

##### `IntegerInput`<sup>Optional</sup> <a name="IntegerInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerInput"></a>

```go
func IntegerInput() *f64
```

- *Type:* *f64

---

##### `IntegerListInput`<sup>Optional</sup> <a name="IntegerListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerListInput"></a>

```go
func IntegerListInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `StringInput`<sup>Optional</sup> <a name="StringInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringInput"></a>

```go
func StringInput() *string
```

- *Type:* *string

---

##### `StringListInput`<sup>Optional</sup> <a name="StringListInput" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringListInput"></a>

```go
func StringListInput() *[]*string
```

- *Type:* *[]*string

---

##### `Boolean`<sup>Required</sup> <a name="Boolean" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.boolean"></a>

```go
func Boolean() interface{}
```

- *Type:* interface{}

---

##### `Double`<sup>Required</sup> <a name="Double" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.double"></a>

```go
func Double() *f64
```

- *Type:* *f64

---

##### `Enum`<sup>Required</sup> <a name="Enum" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enum"></a>

```go
func Enum() *string
```

- *Type:* *string

---

##### `EnumList`<sup>Required</sup> <a name="EnumList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.enumList"></a>

```go
func EnumList() *[]*string
```

- *Type:* *[]*string

---

##### `Integer`<sup>Required</sup> <a name="Integer" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integer"></a>

```go
func Integer() *f64
```

- *Type:* *f64

---

##### `IntegerList`<sup>Required</sup> <a name="IntegerList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.integerList"></a>

```go
func IntegerList() *[]*f64
```

- *Type:* *[]*f64

---

##### `String`<sup>Required</sup> <a name="String" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.string"></a>

```go
func String() *string
```

- *Type:* *string

---

##### `StringList`<sup>Required</sup> <a name="StringList" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.stringList"></a>

```go
func StringList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securityhubSecurityControl.SecurityhubSecurityControlParametersValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



