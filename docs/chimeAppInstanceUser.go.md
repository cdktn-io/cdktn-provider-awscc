# `chimeAppInstanceUser` Submodule <a name="`chimeAppInstanceUser` Submodule" id="@cdktn/provider-awscc.chimeAppInstanceUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChimeAppInstanceUser <a name="ChimeAppInstanceUser" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user awscc_chime_app_instance_user}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimeappinstanceuser"

chimeappinstanceuser.NewChimeAppInstanceUser(scope Construct, id *string, config ChimeAppInstanceUserConfig) ChimeAppInstanceUser
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig">ChimeAppInstanceUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig">ChimeAppInstanceUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putExpirationSettings">PutExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetExpirationSettings">ResetExpirationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExpirationSettings` <a name="PutExpirationSettings" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putExpirationSettings"></a>

```go
func PutExpirationSettings(value ChimeAppInstanceUserExpirationSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putExpirationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExpirationSettings` <a name="ResetExpirationSettings" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetExpirationSettings"></a>

```go
func ResetExpirationSettings()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ChimeAppInstanceUser resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimeappinstanceuser"

chimeappinstanceuser.ChimeAppInstanceUser_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimeappinstanceuser"

chimeappinstanceuser.ChimeAppInstanceUser_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimeappinstanceuser"

chimeappinstanceuser.ChimeAppInstanceUser_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimeappinstanceuser"

chimeappinstanceuser.ChimeAppInstanceUser_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ChimeAppInstanceUser resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChimeAppInstanceUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChimeAppInstanceUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ChimeAppInstanceUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserArn">AppInstanceUserArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.expirationSettings">ExpirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference">ChimeAppInstanceUserExpirationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList">ChimeAppInstanceUserTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceArnInput">AppInstanceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserIdInput">AppInstanceUserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.expirationSettingsInput">ExpirationSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.metadataInput">MetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceArn">AppInstanceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserId">AppInstanceUserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.metadata">Metadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppInstanceUserArn`<sup>Required</sup> <a name="AppInstanceUserArn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserArn"></a>

```go
func AppInstanceUserArn() *string
```

- *Type:* *string

---

##### `ExpirationSettings`<sup>Required</sup> <a name="ExpirationSettings" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.expirationSettings"></a>

```go
func ExpirationSettings() ChimeAppInstanceUserExpirationSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference">ChimeAppInstanceUserExpirationSettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tags"></a>

```go
func Tags() ChimeAppInstanceUserTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList">ChimeAppInstanceUserTagsList</a>

---

##### `AppInstanceArnInput`<sup>Optional</sup> <a name="AppInstanceArnInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceArnInput"></a>

```go
func AppInstanceArnInput() *string
```

- *Type:* *string

---

##### `AppInstanceUserIdInput`<sup>Optional</sup> <a name="AppInstanceUserIdInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserIdInput"></a>

```go
func AppInstanceUserIdInput() *string
```

- *Type:* *string

---

##### `ExpirationSettingsInput`<sup>Optional</sup> <a name="ExpirationSettingsInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.expirationSettingsInput"></a>

```go
func ExpirationSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.metadataInput"></a>

```go
func MetadataInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AppInstanceArn`<sup>Required</sup> <a name="AppInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceArn"></a>

```go
func AppInstanceArn() *string
```

- *Type:* *string

---

##### `AppInstanceUserId`<sup>Required</sup> <a name="AppInstanceUserId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.appInstanceUserId"></a>

```go
func AppInstanceUserId() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.metadata"></a>

```go
func Metadata() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUser.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChimeAppInstanceUserConfig <a name="ChimeAppInstanceUserConfig" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimeappinstanceuser"

&chimeappinstanceuser.ChimeAppInstanceUserConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AppInstanceArn: *string,
	AppInstanceUserId: *string,
	ExpirationSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings,
	Metadata: *string,
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.appInstanceArn">AppInstanceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_arn ChimeAppInstanceUser#app_instance_arn}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.appInstanceUserId">AppInstanceUserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_user_id ChimeAppInstanceUser#app_instance_user_id}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.expirationSettings">ExpirationSettings</a></code> | <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_settings ChimeAppInstanceUser#expiration_settings}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.metadata">Metadata</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#metadata ChimeAppInstanceUser#metadata}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#name ChimeAppInstanceUser#name}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#tags ChimeAppInstanceUser#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AppInstanceArn`<sup>Required</sup> <a name="AppInstanceArn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.appInstanceArn"></a>

```go
AppInstanceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_arn ChimeAppInstanceUser#app_instance_arn}.

---

##### `AppInstanceUserId`<sup>Required</sup> <a name="AppInstanceUserId" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.appInstanceUserId"></a>

```go
AppInstanceUserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#app_instance_user_id ChimeAppInstanceUser#app_instance_user_id}.

---

##### `ExpirationSettings`<sup>Optional</sup> <a name="ExpirationSettings" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.expirationSettings"></a>

```go
ExpirationSettings ChimeAppInstanceUserExpirationSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings">ChimeAppInstanceUserExpirationSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_settings ChimeAppInstanceUser#expiration_settings}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.metadata"></a>

```go
Metadata *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#metadata ChimeAppInstanceUser#metadata}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#name ChimeAppInstanceUser#name}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#tags ChimeAppInstanceUser#tags}.

---

### ChimeAppInstanceUserExpirationSettings <a name="ChimeAppInstanceUserExpirationSettings" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimeappinstanceuser"

&chimeappinstanceuser.ChimeAppInstanceUserExpirationSettings {
	ExpirationCriterion: *string,
	ExpirationDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings.property.expirationCriterion">ExpirationCriterion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_criterion ChimeAppInstanceUser#expiration_criterion}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings.property.expirationDays">ExpirationDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_days ChimeAppInstanceUser#expiration_days}. |

---

##### `ExpirationCriterion`<sup>Optional</sup> <a name="ExpirationCriterion" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings.property.expirationCriterion"></a>

```go
ExpirationCriterion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_criterion ChimeAppInstanceUser#expiration_criterion}.

---

##### `ExpirationDays`<sup>Optional</sup> <a name="ExpirationDays" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettings.property.expirationDays"></a>

```go
ExpirationDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#expiration_days ChimeAppInstanceUser#expiration_days}.

---

### ChimeAppInstanceUserTags <a name="ChimeAppInstanceUserTags" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimeappinstanceuser"

&chimeappinstanceuser.ChimeAppInstanceUserTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#key ChimeAppInstanceUser#key}. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#value ChimeAppInstanceUser#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#key ChimeAppInstanceUser#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/chime_app_instance_user#value ChimeAppInstanceUser#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChimeAppInstanceUserExpirationSettingsOutputReference <a name="ChimeAppInstanceUserExpirationSettingsOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimeappinstanceuser"

chimeappinstanceuser.NewChimeAppInstanceUserExpirationSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChimeAppInstanceUserExpirationSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resetExpirationCriterion">ResetExpirationCriterion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resetExpirationDays">ResetExpirationDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExpirationCriterion` <a name="ResetExpirationCriterion" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resetExpirationCriterion"></a>

```go
func ResetExpirationCriterion()
```

##### `ResetExpirationDays` <a name="ResetExpirationDays" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.resetExpirationDays"></a>

```go
func ResetExpirationDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationCriterionInput">ExpirationCriterionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationDaysInput">ExpirationDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationCriterion">ExpirationCriterion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationDays">ExpirationDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpirationCriterionInput`<sup>Optional</sup> <a name="ExpirationCriterionInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationCriterionInput"></a>

```go
func ExpirationCriterionInput() *string
```

- *Type:* *string

---

##### `ExpirationDaysInput`<sup>Optional</sup> <a name="ExpirationDaysInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationDaysInput"></a>

```go
func ExpirationDaysInput() *f64
```

- *Type:* *f64

---

##### `ExpirationCriterion`<sup>Required</sup> <a name="ExpirationCriterion" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationCriterion"></a>

```go
func ExpirationCriterion() *string
```

- *Type:* *string

---

##### `ExpirationDays`<sup>Required</sup> <a name="ExpirationDays" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.expirationDays"></a>

```go
func ExpirationDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserExpirationSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeAppInstanceUserTagsList <a name="ChimeAppInstanceUserTagsList" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimeappinstanceuser"

chimeappinstanceuser.NewChimeAppInstanceUserTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChimeAppInstanceUserTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.get"></a>

```go
func Get(index *f64) ChimeAppInstanceUserTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ChimeAppInstanceUserTagsOutputReference <a name="ChimeAppInstanceUserTagsOutputReference" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/chimeappinstanceuser"

chimeappinstanceuser.NewChimeAppInstanceUserTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChimeAppInstanceUserTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.chimeAppInstanceUser.ChimeAppInstanceUserTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



