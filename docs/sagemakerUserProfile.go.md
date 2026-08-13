# `sagemakerUserProfile` Submodule <a name="`sagemakerUserProfile` Submodule" id="@cdktn/provider-awscc.sagemakerUserProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SagemakerUserProfile <a name="SagemakerUserProfile" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile awscc_sagemaker_user_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfile(scope Construct, id *string, config SagemakerUserProfileConfig) SagemakerUserProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig">SagemakerUserProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig">SagemakerUserProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putUserSettings">PutUserSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserIdentifier">ResetSingleSignOnUserIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserValue">ResetSingleSignOnUserValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetUserSettings">ResetUserSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUserSettings` <a name="PutUserSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putUserSettings"></a>

```go
func PutUserSettings(value SagemakerUserProfileUserSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.putUserSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

---

##### `ResetSingleSignOnUserIdentifier` <a name="ResetSingleSignOnUserIdentifier" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserIdentifier"></a>

```go
func ResetSingleSignOnUserIdentifier()
```

##### `ResetSingleSignOnUserValue` <a name="ResetSingleSignOnUserValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetSingleSignOnUserValue"></a>

```go
func ResetSingleSignOnUserValue()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUserSettings` <a name="ResetUserSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.resetUserSettings"></a>

```go
func ResetUserSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SagemakerUserProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.SagemakerUserProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.SagemakerUserProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.SagemakerUserProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.SagemakerUserProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SagemakerUserProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SagemakerUserProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SagemakerUserProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SagemakerUserProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList">SagemakerUserProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileArn">UserProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettings">UserSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference">SagemakerUserProfileUserSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainIdInput">DomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifierInput">SingleSignOnUserIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValueInput">SingleSignOnUserValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileNameInput">UserProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettingsInput">UserSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainId">DomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifier">SingleSignOnUserIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValue">SingleSignOnUserValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileName">UserProfileName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tags"></a>

```go
func Tags() SagemakerUserProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList">SagemakerUserProfileTagsList</a>

---

##### `UserProfileArn`<sup>Required</sup> <a name="UserProfileArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileArn"></a>

```go
func UserProfileArn() *string
```

- *Type:* *string

---

##### `UserSettings`<sup>Required</sup> <a name="UserSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettings"></a>

```go
func UserSettings() SagemakerUserProfileUserSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference">SagemakerUserProfileUserSettingsOutputReference</a>

---

##### `DomainIdInput`<sup>Optional</sup> <a name="DomainIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainIdInput"></a>

```go
func DomainIdInput() *string
```

- *Type:* *string

---

##### `SingleSignOnUserIdentifierInput`<sup>Optional</sup> <a name="SingleSignOnUserIdentifierInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifierInput"></a>

```go
func SingleSignOnUserIdentifierInput() *string
```

- *Type:* *string

---

##### `SingleSignOnUserValueInput`<sup>Optional</sup> <a name="SingleSignOnUserValueInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValueInput"></a>

```go
func SingleSignOnUserValueInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UserProfileNameInput`<sup>Optional</sup> <a name="UserProfileNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileNameInput"></a>

```go
func UserProfileNameInput() *string
```

- *Type:* *string

---

##### `UserSettingsInput`<sup>Optional</sup> <a name="UserSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userSettingsInput"></a>

```go
func UserSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.domainId"></a>

```go
func DomainId() *string
```

- *Type:* *string

---

##### `SingleSignOnUserIdentifier`<sup>Required</sup> <a name="SingleSignOnUserIdentifier" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserIdentifier"></a>

```go
func SingleSignOnUserIdentifier() *string
```

- *Type:* *string

---

##### `SingleSignOnUserValue`<sup>Required</sup> <a name="SingleSignOnUserValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.singleSignOnUserValue"></a>

```go
func SingleSignOnUserValue() *string
```

- *Type:* *string

---

##### `UserProfileName`<sup>Required</sup> <a name="UserProfileName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.userProfileName"></a>

```go
func UserProfileName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SagemakerUserProfileConfig <a name="SagemakerUserProfileConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DomainId: *string,
	UserProfileName: *string,
	SingleSignOnUserIdentifier: *string,
	SingleSignOnUserValue: *string,
	Tags: interface{},
	UserSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.domainId">DomainId</a></code> | <code>*string</code> | The ID of the associated Domain. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userProfileName">UserProfileName</a></code> | <code>*string</code> | A name for the UserProfile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserIdentifier">SingleSignOnUserIdentifier</a></code> | <code>*string</code> | A specifier for the type of value specified in SingleSignOnUserValue. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserValue">SingleSignOnUserValue</a></code> | <code>*string</code> | The username of the associated AWS Single Sign-On User for this UserProfile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of tags to apply to the user profile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userSettings">UserSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a></code> | A collection of settings. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DomainId`<sup>Required</sup> <a name="DomainId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.domainId"></a>

```go
DomainId *string
```

- *Type:* *string

The ID of the associated Domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#domain_id SagemakerUserProfile#domain_id}

---

##### `UserProfileName`<sup>Required</sup> <a name="UserProfileName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userProfileName"></a>

```go
UserProfileName *string
```

- *Type:* *string

A name for the UserProfile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#user_profile_name SagemakerUserProfile#user_profile_name}

---

##### `SingleSignOnUserIdentifier`<sup>Optional</sup> <a name="SingleSignOnUserIdentifier" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserIdentifier"></a>

```go
SingleSignOnUserIdentifier *string
```

- *Type:* *string

A specifier for the type of value specified in SingleSignOnUserValue.

Currently, the only supported value is "UserName". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#single_sign_on_user_identifier SagemakerUserProfile#single_sign_on_user_identifier}

---

##### `SingleSignOnUserValue`<sup>Optional</sup> <a name="SingleSignOnUserValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.singleSignOnUserValue"></a>

```go
SingleSignOnUserValue *string
```

- *Type:* *string

The username of the associated AWS Single Sign-On User for this UserProfile.

If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#single_sign_on_user_value SagemakerUserProfile#single_sign_on_user_value}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of tags to apply to the user profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#tags SagemakerUserProfile#tags}

---

##### `UserSettings`<sup>Optional</sup> <a name="UserSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileConfig.property.userSettings"></a>

```go
UserSettings SagemakerUserProfileUserSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings">SagemakerUserProfileUserSettings</a>

A collection of settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#user_settings SagemakerUserProfile#user_settings}

---

### SagemakerUserProfileTags <a name="SagemakerUserProfileTags" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#key SagemakerUserProfile#key}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#value SagemakerUserProfile#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#key SagemakerUserProfile#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#value SagemakerUserProfile#value}.

---

### SagemakerUserProfileUserSettings <a name="SagemakerUserProfileUserSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettings {
	AutoMountHomeEfs: *string,
	CodeEditorAppSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings,
	CustomFileSystemConfigs: interface{},
	CustomPosixUserConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig,
	DefaultLandingUri: *string,
	ExecutionRole: *string,
	JupyterLabAppSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings,
	JupyterServerAppSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings,
	KernelGatewayAppSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings,
	RStudioServerProAppSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings,
	SecurityGroups: *[]*string,
	SharingSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings,
	SpaceStorageSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings,
	StudioWebPortal: *string,
	StudioWebPortalSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.autoMountHomeEfs">AutoMountHomeEfs</a></code> | <code>*string</code> | Indicates whether auto-mounting of an EFS volume is supported for the user profile. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.codeEditorAppSettings">CodeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a></code> | The CodeEditor app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customFileSystemConfigs">CustomFileSystemConfigs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_file_system_configs SagemakerUserProfile#custom_file_system_configs}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customPosixUserConfig">CustomPosixUserConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_posix_user_config SagemakerUserProfile#custom_posix_user_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.defaultLandingUri">DefaultLandingUri</a></code> | <code>*string</code> | Defines which Amazon SageMaker application users are directed to by default. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | The user profile Amazon Resource Name (ARN). |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterLabAppSettings">JupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a></code> | The JupyterLab app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterServerAppSettings">JupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a></code> | The Jupyter server's app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.kernelGatewayAppSettings">KernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a></code> | The kernel gateway app settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rStudioServerProAppSettings">RStudioServerProAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a></code> | A collection of settings that configure user interaction with the RStudioServerPro app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.sharingSettings">SharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a></code> | The sharing settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.spaceStorageSettings">SpaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a></code> | Default storage settings for a space. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortal">StudioWebPortal</a></code> | <code>*string</code> | Indicates whether the Studio experience is available to users. If not, users cannot access Studio. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortalSettings">StudioWebPortalSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a></code> | Studio settings. |

---

##### `AutoMountHomeEfs`<sup>Optional</sup> <a name="AutoMountHomeEfs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.autoMountHomeEfs"></a>

```go
AutoMountHomeEfs *string
```

- *Type:* *string

Indicates whether auto-mounting of an EFS volume is supported for the user profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#auto_mount_home_efs SagemakerUserProfile#auto_mount_home_efs}

---

##### `CodeEditorAppSettings`<sup>Optional</sup> <a name="CodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.codeEditorAppSettings"></a>

```go
CodeEditorAppSettings SagemakerUserProfileUserSettingsCodeEditorAppSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

The CodeEditor app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#code_editor_app_settings SagemakerUserProfile#code_editor_app_settings}

---

##### `CustomFileSystemConfigs`<sup>Optional</sup> <a name="CustomFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customFileSystemConfigs"></a>

```go
CustomFileSystemConfigs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_file_system_configs SagemakerUserProfile#custom_file_system_configs}.

---

##### `CustomPosixUserConfig`<sup>Optional</sup> <a name="CustomPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.customPosixUserConfig"></a>

```go
CustomPosixUserConfig SagemakerUserProfileUserSettingsCustomPosixUserConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_posix_user_config SagemakerUserProfile#custom_posix_user_config}.

---

##### `DefaultLandingUri`<sup>Optional</sup> <a name="DefaultLandingUri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.defaultLandingUri"></a>

```go
DefaultLandingUri *string
```

- *Type:* *string

Defines which Amazon SageMaker application users are directed to by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_landing_uri SagemakerUserProfile#default_landing_uri}

---

##### `ExecutionRole`<sup>Optional</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.executionRole"></a>

```go
ExecutionRole *string
```

- *Type:* *string

The user profile Amazon Resource Name (ARN).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#execution_role SagemakerUserProfile#execution_role}

---

##### `JupyterLabAppSettings`<sup>Optional</sup> <a name="JupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterLabAppSettings"></a>

```go
JupyterLabAppSettings SagemakerUserProfileUserSettingsJupyterLabAppSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

The JupyterLab app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#jupyter_lab_app_settings SagemakerUserProfile#jupyter_lab_app_settings}

---

##### `JupyterServerAppSettings`<sup>Optional</sup> <a name="JupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.jupyterServerAppSettings"></a>

```go
JupyterServerAppSettings SagemakerUserProfileUserSettingsJupyterServerAppSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

The Jupyter server's app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#jupyter_server_app_settings SagemakerUserProfile#jupyter_server_app_settings}

---

##### `KernelGatewayAppSettings`<sup>Optional</sup> <a name="KernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.kernelGatewayAppSettings"></a>

```go
KernelGatewayAppSettings SagemakerUserProfileUserSettingsKernelGatewayAppSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

The kernel gateway app settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#kernel_gateway_app_settings SagemakerUserProfile#kernel_gateway_app_settings}

---

##### `RStudioServerProAppSettings`<sup>Optional</sup> <a name="RStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.rStudioServerProAppSettings"></a>

```go
RStudioServerProAppSettings SagemakerUserProfileUserSettingsRStudioServerProAppSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

A collection of settings that configure user interaction with the RStudioServerPro app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#r_studio_server_pro_app_settings SagemakerUserProfile#r_studio_server_pro_app_settings}

---

##### `SecurityGroups`<sup>Optional</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.securityGroups"></a>

```go
SecurityGroups *[]*string
```

- *Type:* *[]*string

The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#security_groups SagemakerUserProfile#security_groups}

---

##### `SharingSettings`<sup>Optional</sup> <a name="SharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.sharingSettings"></a>

```go
SharingSettings SagemakerUserProfileUserSettingsSharingSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

The sharing settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sharing_settings SagemakerUserProfile#sharing_settings}

---

##### `SpaceStorageSettings`<sup>Optional</sup> <a name="SpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.spaceStorageSettings"></a>

```go
SpaceStorageSettings SagemakerUserProfileUserSettingsSpaceStorageSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

Default storage settings for a space.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#space_storage_settings SagemakerUserProfile#space_storage_settings}

---

##### `StudioWebPortal`<sup>Optional</sup> <a name="StudioWebPortal" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortal"></a>

```go
StudioWebPortal *string
```

- *Type:* *string

Indicates whether the Studio experience is available to users. If not, users cannot access Studio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#studio_web_portal SagemakerUserProfile#studio_web_portal}

---

##### `StudioWebPortalSettings`<sup>Optional</sup> <a name="StudioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettings.property.studioWebPortalSettings"></a>

```go
StudioWebPortalSettings SagemakerUserProfileUserSettingsStudioWebPortalSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a>

Studio settings.

If these settings are applied on a user level, they take priority over the settings applied on a domain level.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#studio_web_portal_settings SagemakerUserProfile#studio_web_portal_settings}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettings <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsCodeEditorAppSettings {
	AppLifecycleManagement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement,
	BuiltInLifecycleConfigArn: *string,
	CustomImages: interface{},
	DefaultResourceSpec: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec,
	LifecycleConfigArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.appLifecycleManagement">AppLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.builtInLifecycleConfigArn">BuiltInLifecycleConfigArn</a></code> | <code>*string</code> | The lifecycle configuration that runs before the default lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.customImages">CustomImages</a></code> | <code>interface{}</code> | A list of custom images for use for CodeEditor apps. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a></code> | The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>*[]*string</code> | A list of LifecycleConfigArns available for use with CodeEditor apps. |

---

##### `AppLifecycleManagement`<sup>Optional</sup> <a name="AppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.appLifecycleManagement"></a>

```go
AppLifecycleManagement SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}.

---

##### `BuiltInLifecycleConfigArn`<sup>Optional</sup> <a name="BuiltInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.builtInLifecycleConfigArn"></a>

```go
BuiltInLifecycleConfigArn *string
```

- *Type:* *string

The lifecycle configuration that runs before the default lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn SagemakerUserProfile#built_in_lifecycle_config_arn}

---

##### `CustomImages`<sup>Optional</sup> <a name="CustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.customImages"></a>

```go
CustomImages interface{}
```

- *Type:* interface{}

A list of custom images for use for CodeEditor apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}

---

##### `DefaultResourceSpec`<sup>Optional</sup> <a name="DefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.defaultResourceSpec"></a>

```go
DefaultResourceSpec SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `LifecycleConfigArns`<sup>Optional</sup> <a name="LifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings.property.lifecycleConfigArns"></a>

```go
LifecycleConfigArns *[]*string
```

- *Type:* *[]*string

A list of LifecycleConfigArns available for use with CodeEditor apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement {
	IdleSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings">IdleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}. |

---

##### `IdleSettings`<sup>Optional</sup> <a name="IdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```go
IdleSettings SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}.

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings {
	IdleTimeoutInMinutes: *f64,
	LifecycleManagement: *string,
	MaxIdleTimeoutInMinutes: *f64,
	MinIdleTimeoutInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>*f64</code> | The idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement">LifecycleManagement</a></code> | <code>*string</code> | A flag to enable/disable AppLifecycleManagement settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes">MaxIdleTimeoutInMinutes</a></code> | <code>*f64</code> | The maximum idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes">MinIdleTimeoutInMinutes</a></code> | <code>*f64</code> | The minimum idle timeout value set in minutes. |

---

##### `IdleTimeoutInMinutes`<sup>Optional</sup> <a name="IdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```go
IdleTimeoutInMinutes *f64
```

- *Type:* *f64

The idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes SagemakerUserProfile#idle_timeout_in_minutes}

---

##### `LifecycleManagement`<sup>Optional</sup> <a name="LifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement"></a>

```go
LifecycleManagement *string
```

- *Type:* *string

A flag to enable/disable AppLifecycleManagement settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_management SagemakerUserProfile#lifecycle_management}

---

##### `MaxIdleTimeoutInMinutes`<sup>Optional</sup> <a name="MaxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes"></a>

```go
MaxIdleTimeoutInMinutes *f64
```

- *Type:* *f64

The maximum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes SagemakerUserProfile#max_idle_timeout_in_minutes}

---

##### `MinIdleTimeoutInMinutes`<sup>Optional</sup> <a name="MinIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes"></a>

```go
MinIdleTimeoutInMinutes *f64
```

- *Type:* *f64

The minimum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes SagemakerUserProfile#min_idle_timeout_in_minutes}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages {
	AppImageConfigName: *string,
	ImageName: *string,
	ImageVersionNumber: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.appImageConfigName">AppImageConfigName</a></code> | <code>*string</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageName">ImageName</a></code> | <code>*string</code> | The name of the CustomImage. Must be unique to your account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>*f64</code> | The version number of the CustomImage. |

---

##### `AppImageConfigName`<sup>Optional</sup> <a name="AppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.appImageConfigName"></a>

```go
AppImageConfigName *string
```

- *Type:* *string

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

The name of the CustomImage. Must be unique to your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}

---

##### `ImageVersionNumber`<sup>Optional</sup> <a name="ImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImages.property.imageVersionNumber"></a>

```go
ImageVersionNumber *f64
```

- *Type:* *f64

The version number of the CustomImage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}

---

### SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec {
	InstanceType: *string,
	LifecycleConfigArn: *string,
	SageMakerImageArn: *string,
	SageMakerImageVersionArn: *string,
	TrainingPlanArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>*string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageArn">SageMakerImageArn</a></code> | <code>*string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">SageMakerImageVersionArn</a></code> | <code>*string</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```go
LifecycleConfigArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `SageMakerImageArn`<sup>Optional</sup> <a name="SageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```go
SageMakerImageArn *string
```

- *Type:* *string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `SageMakerImageVersionArn`<sup>Optional</sup> <a name="SageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```go
SageMakerImageVersionArn *string
```

- *Type:* *string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `TrainingPlanArn`<sup>Optional</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```go
TrainingPlanArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigs <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs {
	EfsFileSystemConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig,
	FsxLustreFileSystemConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig,
	S3FileSystemConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.efsFileSystemConfig">EfsFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#efs_file_system_config SagemakerUserProfile#efs_file_system_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.fsxLustreFileSystemConfig">FsxLustreFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#fsx_lustre_file_system_config SagemakerUserProfile#fsx_lustre_file_system_config}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.s3FileSystemConfig">S3FileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_file_system_config SagemakerUserProfile#s3_file_system_config}. |

---

##### `EfsFileSystemConfig`<sup>Optional</sup> <a name="EfsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.efsFileSystemConfig"></a>

```go
EfsFileSystemConfig SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#efs_file_system_config SagemakerUserProfile#efs_file_system_config}.

---

##### `FsxLustreFileSystemConfig`<sup>Optional</sup> <a name="FsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.fsxLustreFileSystemConfig"></a>

```go
FsxLustreFileSystemConfig SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#fsx_lustre_file_system_config SagemakerUserProfile#fsx_lustre_file_system_config}.

---

##### `S3FileSystemConfig`<sup>Optional</sup> <a name="S3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigs.property.s3FileSystemConfig"></a>

```go
S3FileSystemConfig SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_file_system_config SagemakerUserProfile#s3_file_system_config}.

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig {
	FileSystemId: *string,
	FileSystemPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemPath">FileSystemPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}. |

---

##### `FileSystemId`<sup>Optional</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemId"></a>

```go
FileSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}.

---

##### `FileSystemPath`<sup>Optional</sup> <a name="FileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig.property.fileSystemPath"></a>

```go
FileSystemPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}.

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig {
	FileSystemId: *string,
	FileSystemPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemPath">FileSystemPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}. |

---

##### `FileSystemId`<sup>Optional</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemId"></a>

```go
FileSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_id SagemakerUserProfile#file_system_id}.

---

##### `FileSystemPath`<sup>Optional</sup> <a name="FileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig.property.fileSystemPath"></a>

```go
FileSystemPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#file_system_path SagemakerUserProfile#file_system_path}.

---

### SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig {
	MountPath: *string,
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.mountPath">MountPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#mount_path SagemakerUserProfile#mount_path}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_uri SagemakerUserProfile#s3_uri}. |

---

##### `MountPath`<sup>Optional</sup> <a name="MountPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.mountPath"></a>

```go
MountPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#mount_path SagemakerUserProfile#mount_path}.

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_uri SagemakerUserProfile#s3_uri}.

---

### SagemakerUserProfileUserSettingsCustomPosixUserConfig <a name="SagemakerUserProfileUserSettingsCustomPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsCustomPosixUserConfig {
	Gid: *f64,
	Uid: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.gid">Gid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.uid">Uid</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}. |

---

##### `Gid`<sup>Optional</sup> <a name="Gid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.gid"></a>

```go
Gid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#gid SagemakerUserProfile#gid}.

---

##### `Uid`<sup>Optional</sup> <a name="Uid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig.property.uid"></a>

```go
Uid *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#uid SagemakerUserProfile#uid}.

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettings <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsJupyterLabAppSettings {
	AppLifecycleManagement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement,
	BuiltInLifecycleConfigArn: *string,
	CodeRepositories: interface{},
	CustomImages: interface{},
	DefaultResourceSpec: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec,
	EmrSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings,
	LifecycleConfigArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.appLifecycleManagement">AppLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.builtInLifecycleConfigArn">BuiltInLifecycleConfigArn</a></code> | <code>*string</code> | The lifecycle configuration that runs before the default lifecycle configuration. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.codeRepositories">CodeRepositories</a></code> | <code>interface{}</code> | A list of CodeRepositories available for use with JupyterLab apps. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.customImages">CustomImages</a></code> | <code>interface{}</code> | A list of custom images available for use for JupyterLab apps. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a></code> | The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.emrSettings">EmrSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a></code> | The configuration parameters for EMR settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>*[]*string</code> | A list of LifecycleConfigArns available for use with JupyterLab apps. |

---

##### `AppLifecycleManagement`<sup>Optional</sup> <a name="AppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.appLifecycleManagement"></a>

```go
AppLifecycleManagement SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_lifecycle_management SagemakerUserProfile#app_lifecycle_management}.

---

##### `BuiltInLifecycleConfigArn`<sup>Optional</sup> <a name="BuiltInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.builtInLifecycleConfigArn"></a>

```go
BuiltInLifecycleConfigArn *string
```

- *Type:* *string

The lifecycle configuration that runs before the default lifecycle configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#built_in_lifecycle_config_arn SagemakerUserProfile#built_in_lifecycle_config_arn}

---

##### `CodeRepositories`<sup>Optional</sup> <a name="CodeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.codeRepositories"></a>

```go
CodeRepositories interface{}
```

- *Type:* interface{}

A list of CodeRepositories available for use with JupyterLab apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#code_repositories SagemakerUserProfile#code_repositories}

---

##### `CustomImages`<sup>Optional</sup> <a name="CustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.customImages"></a>

```go
CustomImages interface{}
```

- *Type:* interface{}

A list of custom images available for use for JupyterLab apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}

---

##### `DefaultResourceSpec`<sup>Optional</sup> <a name="DefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.defaultResourceSpec"></a>

```go
DefaultResourceSpec SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `EmrSettings`<sup>Optional</sup> <a name="EmrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.emrSettings"></a>

```go
EmrSettings SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a>

The configuration parameters for EMR settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#emr_settings SagemakerUserProfile#emr_settings}

---

##### `LifecycleConfigArns`<sup>Optional</sup> <a name="LifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings.property.lifecycleConfigArns"></a>

```go
LifecycleConfigArns *[]*string
```

- *Type:* *[]*string

A list of LifecycleConfigArns available for use with JupyterLab apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement {
	IdleSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings">IdleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}. |

---

##### `IdleSettings`<sup>Optional</sup> <a name="IdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement.property.idleSettings"></a>

```go
IdleSettings SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_settings SagemakerUserProfile#idle_settings}.

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings {
	IdleTimeoutInMinutes: *f64,
	LifecycleManagement: *string,
	MaxIdleTimeoutInMinutes: *f64,
	MinIdleTimeoutInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>*f64</code> | The idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement">LifecycleManagement</a></code> | <code>*string</code> | A flag to enable/disable AppLifecycleManagement settings. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes">MaxIdleTimeoutInMinutes</a></code> | <code>*f64</code> | The maximum idle timeout value set in minutes. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes">MinIdleTimeoutInMinutes</a></code> | <code>*f64</code> | The minimum idle timeout value set in minutes. |

---

##### `IdleTimeoutInMinutes`<sup>Optional</sup> <a name="IdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.idleTimeoutInMinutes"></a>

```go
IdleTimeoutInMinutes *f64
```

- *Type:* *f64

The idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#idle_timeout_in_minutes SagemakerUserProfile#idle_timeout_in_minutes}

---

##### `LifecycleManagement`<sup>Optional</sup> <a name="LifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.lifecycleManagement"></a>

```go
LifecycleManagement *string
```

- *Type:* *string

A flag to enable/disable AppLifecycleManagement settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_management SagemakerUserProfile#lifecycle_management}

---

##### `MaxIdleTimeoutInMinutes`<sup>Optional</sup> <a name="MaxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.maxIdleTimeoutInMinutes"></a>

```go
MaxIdleTimeoutInMinutes *f64
```

- *Type:* *f64

The maximum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#max_idle_timeout_in_minutes SagemakerUserProfile#max_idle_timeout_in_minutes}

---

##### `MinIdleTimeoutInMinutes`<sup>Optional</sup> <a name="MinIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings.property.minIdleTimeoutInMinutes"></a>

```go
MinIdleTimeoutInMinutes *f64
```

- *Type:* *f64

The minimum idle timeout value set in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#min_idle_timeout_in_minutes SagemakerUserProfile#min_idle_timeout_in_minutes}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories {
	RepositoryUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | A CodeRepository (valid URL) to be used within Jupyter's Git extension. |

---

##### `RepositoryUrl`<sup>Optional</sup> <a name="RepositoryUrl" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositories.property.repositoryUrl"></a>

```go
RepositoryUrl *string
```

- *Type:* *string

A CodeRepository (valid URL) to be used within Jupyter's Git extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#repository_url SagemakerUserProfile#repository_url}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages {
	AppImageConfigName: *string,
	ImageName: *string,
	ImageVersionNumber: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.appImageConfigName">AppImageConfigName</a></code> | <code>*string</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageName">ImageName</a></code> | <code>*string</code> | The name of the CustomImage. Must be unique to your account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>*f64</code> | The version number of the CustomImage. |

---

##### `AppImageConfigName`<sup>Optional</sup> <a name="AppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.appImageConfigName"></a>

```go
AppImageConfigName *string
```

- *Type:* *string

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

The name of the CustomImage. Must be unique to your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}

---

##### `ImageVersionNumber`<sup>Optional</sup> <a name="ImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImages.property.imageVersionNumber"></a>

```go
ImageVersionNumber *f64
```

- *Type:* *f64

The version number of the CustomImage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec {
	InstanceType: *string,
	LifecycleConfigArn: *string,
	SageMakerImageArn: *string,
	SageMakerImageVersionArn: *string,
	TrainingPlanArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>*string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageArn">SageMakerImageArn</a></code> | <code>*string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">SageMakerImageVersionArn</a></code> | <code>*string</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```go
LifecycleConfigArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `SageMakerImageArn`<sup>Optional</sup> <a name="SageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```go
SageMakerImageArn *string
```

- *Type:* *string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `SageMakerImageVersionArn`<sup>Optional</sup> <a name="SageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```go
SageMakerImageVersionArn *string
```

- *Type:* *string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `TrainingPlanArn`<sup>Optional</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```go
TrainingPlanArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings {
	AssumableRoleArns: *[]*string,
	ExecutionRoleArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.assumableRoleArns">AssumableRoleArns</a></code> | <code>*[]*string</code> | An array of Amazon Resource Names (ARNs) of the IAM roles that the execution role of SageMaker can assume. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.executionRoleArns">ExecutionRoleArns</a></code> | <code>*[]*string</code> | An array of ARNs of IAM roles used by EMR cluster instances or job execution environments. |

---

##### `AssumableRoleArns`<sup>Optional</sup> <a name="AssumableRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.assumableRoleArns"></a>

```go
AssumableRoleArns *[]*string
```

- *Type:* *[]*string

An array of Amazon Resource Names (ARNs) of the IAM roles that the execution role of SageMaker can assume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#assumable_role_arns SagemakerUserProfile#assumable_role_arns}

---

##### `ExecutionRoleArns`<sup>Optional</sup> <a name="ExecutionRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings.property.executionRoleArns"></a>

```go
ExecutionRoleArns *[]*string
```

- *Type:* *[]*string

An array of ARNs of IAM roles used by EMR cluster instances or job execution environments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#execution_role_arns SagemakerUserProfile#execution_role_arns}

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettings <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsJupyterServerAppSettings {
	DefaultResourceSpec: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec,
	LifecycleConfigArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>*[]*string</code> | A list of LifecycleConfigArns available for use with JupyterServer apps. |

---

##### `DefaultResourceSpec`<sup>Optional</sup> <a name="DefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.defaultResourceSpec"></a>

```go
DefaultResourceSpec SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}.

---

##### `LifecycleConfigArns`<sup>Optional</sup> <a name="LifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings.property.lifecycleConfigArns"></a>

```go
LifecycleConfigArns *[]*string
```

- *Type:* *[]*string

A list of LifecycleConfigArns available for use with JupyterServer apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec {
	InstanceType: *string,
	LifecycleConfigArn: *string,
	SageMakerImageArn: *string,
	SageMakerImageVersionArn: *string,
	TrainingPlanArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>*string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageArn">SageMakerImageArn</a></code> | <code>*string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">SageMakerImageVersionArn</a></code> | <code>*string</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```go
LifecycleConfigArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `SageMakerImageArn`<sup>Optional</sup> <a name="SageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```go
SageMakerImageArn *string
```

- *Type:* *string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `SageMakerImageVersionArn`<sup>Optional</sup> <a name="SageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```go
SageMakerImageVersionArn *string
```

- *Type:* *string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `TrainingPlanArn`<sup>Optional</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```go
TrainingPlanArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettings <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings {
	CustomImages: interface{},
	DefaultResourceSpec: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec,
	LifecycleConfigArns: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.customImages">CustomImages</a></code> | <code>interface{}</code> | A list of custom SageMaker images that are configured to run as a KernelGateway app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a></code> | The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>*[]*string</code> | A list of LifecycleConfigArns available for use with KernelGateway apps. |

---

##### `CustomImages`<sup>Optional</sup> <a name="CustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.customImages"></a>

```go
CustomImages interface{}
```

- *Type:* interface{}

A list of custom SageMaker images that are configured to run as a KernelGateway app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#custom_images SagemakerUserProfile#custom_images}

---

##### `DefaultResourceSpec`<sup>Optional</sup> <a name="DefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.defaultResourceSpec"></a>

```go
DefaultResourceSpec SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_resource_spec SagemakerUserProfile#default_resource_spec}

---

##### `LifecycleConfigArns`<sup>Optional</sup> <a name="LifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings.property.lifecycleConfigArns"></a>

```go
LifecycleConfigArns *[]*string
```

- *Type:* *[]*string

A list of LifecycleConfigArns available for use with KernelGateway apps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arns SagemakerUserProfile#lifecycle_config_arns}

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages {
	AppImageConfigName: *string,
	ImageName: *string,
	ImageVersionNumber: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.appImageConfigName">AppImageConfigName</a></code> | <code>*string</code> | The Name of the AppImageConfig. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageName">ImageName</a></code> | <code>*string</code> | The name of the CustomImage. Must be unique to your account. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>*f64</code> | The version number of the CustomImage. |

---

##### `AppImageConfigName`<sup>Optional</sup> <a name="AppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.appImageConfigName"></a>

```go
AppImageConfigName *string
```

- *Type:* *string

The Name of the AppImageConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#app_image_config_name SagemakerUserProfile#app_image_config_name}

---

##### `ImageName`<sup>Optional</sup> <a name="ImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageName"></a>

```go
ImageName *string
```

- *Type:* *string

The name of the CustomImage. Must be unique to your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_name SagemakerUserProfile#image_name}

---

##### `ImageVersionNumber`<sup>Optional</sup> <a name="ImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImages.property.imageVersionNumber"></a>

```go
ImageVersionNumber *f64
```

- *Type:* *f64

The version number of the CustomImage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#image_version_number SagemakerUserProfile#image_version_number}

---

### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec {
	InstanceType: *string,
	LifecycleConfigArn: *string,
	SageMakerImageArn: *string,
	SageMakerImageVersionArn: *string,
	TrainingPlanArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType">InstanceType</a></code> | <code>*string</code> | The instance type that the image version runs on. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageArn">SageMakerImageArn</a></code> | <code>*string</code> | The ARN of the SageMaker image that the image version belongs to. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn">SageMakerImageVersionArn</a></code> | <code>*string</code> | The ARN of the image version created on the instance. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec. |

---

##### `InstanceType`<sup>Optional</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.instanceType"></a>

```go
InstanceType *string
```

- *Type:* *string

The instance type that the image version runs on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#instance_type SagemakerUserProfile#instance_type}

---

##### `LifecycleConfigArn`<sup>Optional</sup> <a name="LifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.lifecycleConfigArn"></a>

```go
LifecycleConfigArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#lifecycle_config_arn SagemakerUserProfile#lifecycle_config_arn}

---

##### `SageMakerImageArn`<sup>Optional</sup> <a name="SageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageArn"></a>

```go
SageMakerImageArn *string
```

- *Type:* *string

The ARN of the SageMaker image that the image version belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_arn SagemakerUserProfile#sage_maker_image_arn}

---

##### `SageMakerImageVersionArn`<sup>Optional</sup> <a name="SageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.sageMakerImageVersionArn"></a>

```go
SageMakerImageVersionArn *string
```

- *Type:* *string

The ARN of the image version created on the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_version_arn SagemakerUserProfile#sage_maker_image_version_arn}

---

##### `TrainingPlanArn`<sup>Optional</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec.property.trainingPlanArn"></a>

```go
TrainingPlanArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the training plan to use for the ResourceSpec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#training_plan_arn SagemakerUserProfile#training_plan_arn}

---

### SagemakerUserProfileUserSettingsRStudioServerProAppSettings <a name="SagemakerUserProfileUserSettingsRStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings {
	AccessStatus: *string,
	UserGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.accessStatus">AccessStatus</a></code> | <code>*string</code> | Indicates whether the current user has access to the RStudioServerPro app. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.userGroup">UserGroup</a></code> | <code>*string</code> | The level of permissions that the user has within the RStudioServerPro app. |

---

##### `AccessStatus`<sup>Optional</sup> <a name="AccessStatus" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.accessStatus"></a>

```go
AccessStatus *string
```

- *Type:* *string

Indicates whether the current user has access to the RStudioServerPro app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#access_status SagemakerUserProfile#access_status}

---

##### `UserGroup`<sup>Optional</sup> <a name="UserGroup" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings.property.userGroup"></a>

```go
UserGroup *string
```

- *Type:* *string

The level of permissions that the user has within the RStudioServerPro app.

This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#user_group SagemakerUserProfile#user_group}

---

### SagemakerUserProfileUserSettingsSharingSettings <a name="SagemakerUserProfileUserSettingsSharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsSharingSettings {
	NotebookOutputOption: *string,
	S3KmsKeyId: *string,
	S3OutputPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.notebookOutputOption">NotebookOutputOption</a></code> | <code>*string</code> | Whether to include the notebook cell output when sharing the notebook. The default is Disabled. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3KmsKeyId">S3KmsKeyId</a></code> | <code>*string</code> | When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3OutputPath">S3OutputPath</a></code> | <code>*string</code> | When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots. |

---

##### `NotebookOutputOption`<sup>Optional</sup> <a name="NotebookOutputOption" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.notebookOutputOption"></a>

```go
NotebookOutputOption *string
```

- *Type:* *string

Whether to include the notebook cell output when sharing the notebook. The default is Disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#notebook_output_option SagemakerUserProfile#notebook_output_option}

---

##### `S3KmsKeyId`<sup>Optional</sup> <a name="S3KmsKeyId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3KmsKeyId"></a>

```go
S3KmsKeyId *string
```

- *Type:* *string

When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_kms_key_id SagemakerUserProfile#s3_kms_key_id}

---

##### `S3OutputPath`<sup>Optional</sup> <a name="S3OutputPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings.property.s3OutputPath"></a>

```go
S3OutputPath *string
```

- *Type:* *string

When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#s3_output_path SagemakerUserProfile#s3_output_path}

---

### SagemakerUserProfileUserSettingsSpaceStorageSettings <a name="SagemakerUserProfileUserSettingsSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsSpaceStorageSettings {
	DefaultEbsStorageSettings: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.property.defaultEbsStorageSettings">DefaultEbsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a></code> | Properties related to the Amazon Elastic Block Store volume. |

---

##### `DefaultEbsStorageSettings`<sup>Optional</sup> <a name="DefaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings.property.defaultEbsStorageSettings"></a>

```go
DefaultEbsStorageSettings SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

Properties related to the Amazon Elastic Block Store volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_ebs_storage_settings SagemakerUserProfile#default_ebs_storage_settings}

---

### SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings {
	DefaultEbsVolumeSizeInGb: *f64,
	MaximumEbsVolumeSizeInGb: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.defaultEbsVolumeSizeInGb">DefaultEbsVolumeSizeInGb</a></code> | <code>*f64</code> | Default size of the Amazon EBS volume in Gb. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.maximumEbsVolumeSizeInGb">MaximumEbsVolumeSizeInGb</a></code> | <code>*f64</code> | Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb. |

---

##### `DefaultEbsVolumeSizeInGb`<sup>Optional</sup> <a name="DefaultEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.defaultEbsVolumeSizeInGb"></a>

```go
DefaultEbsVolumeSizeInGb *f64
```

- *Type:* *f64

Default size of the Amazon EBS volume in Gb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#default_ebs_volume_size_in_gb SagemakerUserProfile#default_ebs_volume_size_in_gb}

---

##### `MaximumEbsVolumeSizeInGb`<sup>Optional</sup> <a name="MaximumEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings.property.maximumEbsVolumeSizeInGb"></a>

```go
MaximumEbsVolumeSizeInGb *f64
```

- *Type:* *f64

Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#maximum_ebs_volume_size_in_gb SagemakerUserProfile#maximum_ebs_volume_size_in_gb}

---

### SagemakerUserProfileUserSettingsStudioWebPortalSettings <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsStudioWebPortalSettings {
	HiddenAppTypes: *[]*string,
	HiddenInstanceTypes: *[]*string,
	HiddenMlTools: *[]*string,
	HiddenSageMakerImageVersionAliases: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenAppTypes">HiddenAppTypes</a></code> | <code>*[]*string</code> | Applications supported in Studio that are hidden from the Studio left navigation pane. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenInstanceTypes">HiddenInstanceTypes</a></code> | <code>*[]*string</code> | The instance types you are hiding from the Studio user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenMlTools">HiddenMlTools</a></code> | <code>*[]*string</code> | The machine learning tools that are hidden from the Studio left navigation pane. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenSageMakerImageVersionAliases">HiddenSageMakerImageVersionAliases</a></code> | <code>interface{}</code> | The version aliases you are hiding from the Studio user interface. |

---

##### `HiddenAppTypes`<sup>Optional</sup> <a name="HiddenAppTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenAppTypes"></a>

```go
HiddenAppTypes *[]*string
```

- *Type:* *[]*string

Applications supported in Studio that are hidden from the Studio left navigation pane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_app_types SagemakerUserProfile#hidden_app_types}

---

##### `HiddenInstanceTypes`<sup>Optional</sup> <a name="HiddenInstanceTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenInstanceTypes"></a>

```go
HiddenInstanceTypes *[]*string
```

- *Type:* *[]*string

The instance types you are hiding from the Studio user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_instance_types SagemakerUserProfile#hidden_instance_types}

---

##### `HiddenMlTools`<sup>Optional</sup> <a name="HiddenMlTools" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenMlTools"></a>

```go
HiddenMlTools *[]*string
```

- *Type:* *[]*string

The machine learning tools that are hidden from the Studio left navigation pane.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_ml_tools SagemakerUserProfile#hidden_ml_tools}

---

##### `HiddenSageMakerImageVersionAliases`<sup>Optional</sup> <a name="HiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings.property.hiddenSageMakerImageVersionAliases"></a>

```go
HiddenSageMakerImageVersionAliases interface{}
```

- *Type:* interface{}

The version aliases you are hiding from the Studio user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#hidden_sage_maker_image_version_aliases SagemakerUserProfile#hidden_sage_maker_image_version_aliases}

---

### SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

&sagemakeruserprofile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases {
	SageMakerImageName: *string,
	VersionAliases: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.sageMakerImageName">SageMakerImageName</a></code> | <code>*string</code> | The SageMaker image name that you are hiding from the Studio user interface. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.versionAliases">VersionAliases</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#version_aliases SagemakerUserProfile#version_aliases}. |

---

##### `SageMakerImageName`<sup>Optional</sup> <a name="SageMakerImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.sageMakerImageName"></a>

```go
SageMakerImageName *string
```

- *Type:* *string

The SageMaker image name that you are hiding from the Studio user interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#sage_maker_image_name SagemakerUserProfile#sage_maker_image_name}

---

##### `VersionAliases`<sup>Optional</sup> <a name="VersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliases.property.versionAliases"></a>

```go
VersionAliases *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/sagemaker_user_profile#version_aliases SagemakerUserProfile#version_aliases}.

---

## Classes <a name="Classes" id="Classes"></a>

### SagemakerUserProfileTagsList <a name="SagemakerUserProfileTagsList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerUserProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.get"></a>

```go
func Get(index *f64) SagemakerUserProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileTagsOutputReference <a name="SagemakerUserProfileTagsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerUserProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">ResetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement">ResetLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes">ResetMaxIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes">ResetMinIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleTimeoutInMinutes` <a name="ResetIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```go
func ResetIdleTimeoutInMinutes()
```

##### `ResetLifecycleManagement` <a name="ResetLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement"></a>

```go
func ResetLifecycleManagement()
```

##### `ResetMaxIdleTimeoutInMinutes` <a name="ResetMaxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes"></a>

```go
func ResetMaxIdleTimeoutInMinutes()
```

##### `ResetMinIdleTimeoutInMinutes` <a name="ResetMinIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes"></a>

```go
func ResetMinIdleTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">IdleTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput">LifecycleManagementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput">MaxIdleTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput">MinIdleTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement">LifecycleManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes">MaxIdleTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes">MinIdleTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="IdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```go
func IdleTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `LifecycleManagementInput`<sup>Optional</sup> <a name="LifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput"></a>

```go
func LifecycleManagementInput() *string
```

- *Type:* *string

---

##### `MaxIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="MaxIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput"></a>

```go
func MaxIdleTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `MinIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="MinIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput"></a>

```go
func MinIdleTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```go
func IdleTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `LifecycleManagement`<sup>Required</sup> <a name="LifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement"></a>

```go
func LifecycleManagement() *string
```

- *Type:* *string

---

##### `MaxIdleTimeoutInMinutes`<sup>Required</sup> <a name="MaxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes"></a>

```go
func MaxIdleTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `MinIdleTimeoutInMinutes`<sup>Required</sup> <a name="MinIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes"></a>

```go
func MinIdleTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">PutIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">ResetIdleSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdleSettings` <a name="PutIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```go
func PutIdleSettings(value SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `ResetIdleSettings` <a name="ResetIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```go
func ResetIdleSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">IdleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">IdleSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleSettings`<sup>Required</sup> <a name="IdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```go
func IdleSettings() SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `IdleSettingsInput`<sup>Optional</sup> <a name="IdleSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```go
func IdleSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get"></a>

```go
func Get(index *f64) SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetAppImageConfigName">ResetAppImageConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageVersionNumber">ResetImageVersionNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppImageConfigName` <a name="ResetAppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetAppImageConfigName"></a>

```go
func ResetAppImageConfigName()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageName"></a>

```go
func ResetImageName()
```

##### `ResetImageVersionNumber` <a name="ResetImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.resetImageVersionNumber"></a>

```go
func ResetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput">AppImageConfigNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput">ImageVersionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigName">AppImageConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppImageConfigNameInput`<sup>Optional</sup> <a name="AppImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput"></a>

```go
func AppImageConfigNameInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `ImageVersionNumberInput`<sup>Optional</sup> <a name="ImageVersionNumberInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput"></a>

```go
func ImageVersionNumberInput() *f64
```

- *Type:* *f64

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```go
func AppImageConfigName() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `ImageVersionNumber`<sup>Required</sup> <a name="ImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```go
func ImageVersionNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">ResetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">ResetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">ResetTrainingPlanArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```go
func ResetLifecycleConfigArn()
```

##### `ResetSageMakerImageArn` <a name="ResetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```go
func ResetSageMakerImageArn()
```

##### `ResetSageMakerImageVersionArn` <a name="ResetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```go
func ResetSageMakerImageVersionArn()
```

##### `ResetTrainingPlanArn` <a name="ResetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```go
func ResetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">SageMakerImageArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">SageMakerImageVersionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">TrainingPlanArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">SageMakerImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">SageMakerImageVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```go
func LifecycleConfigArnInput() *string
```

- *Type:* *string

---

##### `SageMakerImageArnInput`<sup>Optional</sup> <a name="SageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```go
func SageMakerImageArnInput() *string
```

- *Type:* *string

---

##### `SageMakerImageVersionArnInput`<sup>Optional</sup> <a name="SageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```go
func SageMakerImageVersionArnInput() *string
```

- *Type:* *string

---

##### `TrainingPlanArnInput`<sup>Optional</sup> <a name="TrainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```go
func TrainingPlanArnInput() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```go
func LifecycleConfigArn() *string
```

- *Type:* *string

---

##### `SageMakerImageArn`<sup>Required</sup> <a name="SageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```go
func SageMakerImageArn() *string
```

- *Type:* *string

---

##### `SageMakerImageVersionArn`<sup>Required</sup> <a name="SageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```go
func SageMakerImageVersionArn() *string
```

- *Type:* *string

---

##### `TrainingPlanArn`<sup>Required</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```go
func TrainingPlanArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement">PutAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putCustomImages">PutCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement">ResetAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetBuiltInLifecycleConfigArn">ResetBuiltInLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetCustomImages">ResetCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec">ResetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetLifecycleConfigArns">ResetLifecycleConfigArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAppLifecycleManagement` <a name="PutAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement"></a>

```go
func PutAppLifecycleManagement(value SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagement</a>

---

##### `PutCustomImages` <a name="PutCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putCustomImages"></a>

```go
func PutCustomImages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putCustomImages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec"></a>

```go
func PutDefaultResourceSpec(value SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpec</a>

---

##### `ResetAppLifecycleManagement` <a name="ResetAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```go
func ResetAppLifecycleManagement()
```

##### `ResetBuiltInLifecycleConfigArn` <a name="ResetBuiltInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetBuiltInLifecycleConfigArn"></a>

```go
func ResetBuiltInLifecycleConfigArn()
```

##### `ResetCustomImages` <a name="ResetCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetCustomImages"></a>

```go
func ResetCustomImages()
```

##### `ResetDefaultResourceSpec` <a name="ResetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```go
func ResetDefaultResourceSpec()
```

##### `ResetLifecycleConfigArns` <a name="ResetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```go
func ResetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement">AppLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImages">CustomImages</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput">AppLifecycleManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArnInput">BuiltInLifecycleConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImagesInput">CustomImagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArnsInput">LifecycleConfigArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArn">BuiltInLifecycleConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppLifecycleManagement`<sup>Required</sup> <a name="AppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagement"></a>

```go
func AppLifecycleManagement() SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `CustomImages`<sup>Required</sup> <a name="CustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImages"></a>

```go
func CustomImages() SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsCodeEditorAppSettingsCustomImagesList</a>

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpec"></a>

```go
func DefaultResourceSpec() SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `AppLifecycleManagementInput`<sup>Optional</sup> <a name="AppLifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```go
func AppLifecycleManagementInput() interface{}
```

- *Type:* interface{}

---

##### `BuiltInLifecycleConfigArnInput`<sup>Optional</sup> <a name="BuiltInLifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArnInput"></a>

```go
func BuiltInLifecycleConfigArnInput() *string
```

- *Type:* *string

---

##### `CustomImagesInput`<sup>Optional</sup> <a name="CustomImagesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.customImagesInput"></a>

```go
func CustomImagesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```go
func DefaultResourceSpecInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleConfigArnsInput`<sup>Optional</sup> <a name="LifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```go
func LifecycleConfigArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BuiltInLifecycleConfigArn`<sup>Required</sup> <a name="BuiltInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.builtInLifecycleConfigArn"></a>

```go
func BuiltInLifecycleConfigArn() *string
```

- *Type:* *string

---

##### `LifecycleConfigArns`<sup>Required</sup> <a name="LifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```go
func LifecycleConfigArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemId">ResetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemPath">ResetFileSystemPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemId` <a name="ResetFileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemId"></a>

```go
func ResetFileSystemId()
```

##### `ResetFileSystemPath` <a name="ResetFileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.resetFileSystemPath"></a>

```go
func ResetFileSystemPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPathInput">FileSystemPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPath">FileSystemPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemIdInput"></a>

```go
func FileSystemIdInput() *string
```

- *Type:* *string

---

##### `FileSystemPathInput`<sup>Optional</sup> <a name="FileSystemPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPathInput"></a>

```go
func FileSystemPathInput() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `FileSystemPath`<sup>Required</sup> <a name="FileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.fileSystemPath"></a>

```go
func FileSystemPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemId">ResetFileSystemId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemPath">ResetFileSystemPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSystemId` <a name="ResetFileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemId"></a>

```go
func ResetFileSystemId()
```

##### `ResetFileSystemPath` <a name="ResetFileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.resetFileSystemPath"></a>

```go
func ResetFileSystemPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemIdInput">FileSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPathInput">FileSystemPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemId">FileSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPath">FileSystemPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FileSystemIdInput`<sup>Optional</sup> <a name="FileSystemIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemIdInput"></a>

```go
func FileSystemIdInput() *string
```

- *Type:* *string

---

##### `FileSystemPathInput`<sup>Optional</sup> <a name="FileSystemPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPathInput"></a>

```go
func FileSystemPathInput() *string
```

- *Type:* *string

---

##### `FileSystemId`<sup>Required</sup> <a name="FileSystemId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemId"></a>

```go
func FileSystemId() *string
```

- *Type:* *string

---

##### `FileSystemPath`<sup>Required</sup> <a name="FileSystemPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.fileSystemPath"></a>

```go
func FileSystemPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsList <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCustomFileSystemConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerUserProfileUserSettingsCustomFileSystemConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get"></a>

```go
func Get(index *f64) SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putEfsFileSystemConfig">PutEfsFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putFsxLustreFileSystemConfig">PutFsxLustreFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putS3FileSystemConfig">PutS3FileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetEfsFileSystemConfig">ResetEfsFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetFsxLustreFileSystemConfig">ResetFsxLustreFileSystemConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetS3FileSystemConfig">ResetS3FileSystemConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEfsFileSystemConfig` <a name="PutEfsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putEfsFileSystemConfig"></a>

```go
func PutEfsFileSystemConfig(value SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putEfsFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfig</a>

---

##### `PutFsxLustreFileSystemConfig` <a name="PutFsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putFsxLustreFileSystemConfig"></a>

```go
func PutFsxLustreFileSystemConfig(value SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putFsxLustreFileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfig</a>

---

##### `PutS3FileSystemConfig` <a name="PutS3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putS3FileSystemConfig"></a>

```go
func PutS3FileSystemConfig(value SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.putS3FileSystemConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfig</a>

---

##### `ResetEfsFileSystemConfig` <a name="ResetEfsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetEfsFileSystemConfig"></a>

```go
func ResetEfsFileSystemConfig()
```

##### `ResetFsxLustreFileSystemConfig` <a name="ResetFsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetFsxLustreFileSystemConfig"></a>

```go
func ResetFsxLustreFileSystemConfig()
```

##### `ResetS3FileSystemConfig` <a name="ResetS3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.resetS3FileSystemConfig"></a>

```go
func ResetS3FileSystemConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfig">EfsFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfig">FsxLustreFileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfig">S3FileSystemConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfigInput">EfsFileSystemConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfigInput">FsxLustreFileSystemConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfigInput">S3FileSystemConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EfsFileSystemConfig`<sup>Required</sup> <a name="EfsFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfig"></a>

```go
func EfsFileSystemConfig() SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsEfsFileSystemConfigOutputReference</a>

---

##### `FsxLustreFileSystemConfig`<sup>Required</sup> <a name="FsxLustreFileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfig"></a>

```go
func FsxLustreFileSystemConfig() SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsFsxLustreFileSystemConfigOutputReference</a>

---

##### `S3FileSystemConfig`<sup>Required</sup> <a name="S3FileSystemConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfig"></a>

```go
func S3FileSystemConfig() SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference">SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference</a>

---

##### `EfsFileSystemConfigInput`<sup>Optional</sup> <a name="EfsFileSystemConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.efsFileSystemConfigInput"></a>

```go
func EfsFileSystemConfigInput() interface{}
```

- *Type:* interface{}

---

##### `FsxLustreFileSystemConfigInput`<sup>Optional</sup> <a name="FsxLustreFileSystemConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.fsxLustreFileSystemConfigInput"></a>

```go
func FsxLustreFileSystemConfigInput() interface{}
```

- *Type:* interface{}

---

##### `S3FileSystemConfigInput`<sup>Optional</sup> <a name="S3FileSystemConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.s3FileSystemConfigInput"></a>

```go
func S3FileSystemConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetMountPath">ResetMountPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMountPath` <a name="ResetMountPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetMountPath"></a>

```go
func ResetMountPath()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPathInput">MountPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPath">MountPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MountPathInput`<sup>Optional</sup> <a name="MountPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPathInput"></a>

```go
func MountPathInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `MountPath`<sup>Required</sup> <a name="MountPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.mountPath"></a>

```go
func MountPath() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsS3FileSystemConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference <a name="SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetGid">ResetGid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetUid">ResetUid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGid` <a name="ResetGid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetGid"></a>

```go
func ResetGid()
```

##### `ResetUid` <a name="ResetUid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.resetUid"></a>

```go
func ResetUid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gidInput">GidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uidInput">UidInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gid">Gid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uid">Uid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GidInput`<sup>Optional</sup> <a name="GidInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gidInput"></a>

```go
func GidInput() *f64
```

- *Type:* *f64

---

##### `UidInput`<sup>Optional</sup> <a name="UidInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uidInput"></a>

```go
func UidInput() *f64
```

- *Type:* *f64

---

##### `Gid`<sup>Required</sup> <a name="Gid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.gid"></a>

```go
func Gid() *f64
```

- *Type:* *f64

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.uid"></a>

```go
func Uid() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes">ResetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement">ResetLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes">ResetMaxIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes">ResetMinIdleTimeoutInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIdleTimeoutInMinutes` <a name="ResetIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetIdleTimeoutInMinutes"></a>

```go
func ResetIdleTimeoutInMinutes()
```

##### `ResetLifecycleManagement` <a name="ResetLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetLifecycleManagement"></a>

```go
func ResetLifecycleManagement()
```

##### `ResetMaxIdleTimeoutInMinutes` <a name="ResetMaxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMaxIdleTimeoutInMinutes"></a>

```go
func ResetMaxIdleTimeoutInMinutes()
```

##### `ResetMinIdleTimeoutInMinutes` <a name="ResetMinIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.resetMinIdleTimeoutInMinutes"></a>

```go
func ResetMinIdleTimeoutInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput">IdleTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput">LifecycleManagementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput">MaxIdleTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput">MinIdleTimeoutInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes">IdleTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement">LifecycleManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes">MaxIdleTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes">MinIdleTimeoutInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="IdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutesInput"></a>

```go
func IdleTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `LifecycleManagementInput`<sup>Optional</sup> <a name="LifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagementInput"></a>

```go
func LifecycleManagementInput() *string
```

- *Type:* *string

---

##### `MaxIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="MaxIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutesInput"></a>

```go
func MaxIdleTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `MinIdleTimeoutInMinutesInput`<sup>Optional</sup> <a name="MinIdleTimeoutInMinutesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutesInput"></a>

```go
func MinIdleTimeoutInMinutesInput() *f64
```

- *Type:* *f64

---

##### `IdleTimeoutInMinutes`<sup>Required</sup> <a name="IdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.idleTimeoutInMinutes"></a>

```go
func IdleTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `LifecycleManagement`<sup>Required</sup> <a name="LifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.lifecycleManagement"></a>

```go
func LifecycleManagement() *string
```

- *Type:* *string

---

##### `MaxIdleTimeoutInMinutes`<sup>Required</sup> <a name="MaxIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.maxIdleTimeoutInMinutes"></a>

```go
func MaxIdleTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `MinIdleTimeoutInMinutes`<sup>Required</sup> <a name="MinIdleTimeoutInMinutes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.minIdleTimeoutInMinutes"></a>

```go
func MinIdleTimeoutInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings">PutIdleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings">ResetIdleSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIdleSettings` <a name="PutIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings"></a>

```go
func PutIdleSettings(value SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.putIdleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettings</a>

---

##### `ResetIdleSettings` <a name="ResetIdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.resetIdleSettings"></a>

```go
func ResetIdleSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings">IdleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput">IdleSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdleSettings`<sup>Required</sup> <a name="IdleSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettings"></a>

```go
func IdleSettings() SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementIdleSettingsOutputReference</a>

---

##### `IdleSettingsInput`<sup>Optional</sup> <a name="IdleSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.idleSettingsInput"></a>

```go
func IdleSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get"></a>

```go
func Get(index *f64) SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resetRepositoryUrl">ResetRepositoryUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRepositoryUrl` <a name="ResetRepositoryUrl" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.resetRepositoryUrl"></a>

```go
func ResetRepositoryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrlInput"></a>

```go
func RepositoryUrlInput() *string
```

- *Type:* *string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.repositoryUrl"></a>

```go
func RepositoryUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get"></a>

```go
func Get(index *f64) SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetAppImageConfigName">ResetAppImageConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageVersionNumber">ResetImageVersionNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppImageConfigName` <a name="ResetAppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetAppImageConfigName"></a>

```go
func ResetAppImageConfigName()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageName"></a>

```go
func ResetImageName()
```

##### `ResetImageVersionNumber` <a name="ResetImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.resetImageVersionNumber"></a>

```go
func ResetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput">AppImageConfigNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput">ImageVersionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigName">AppImageConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppImageConfigNameInput`<sup>Optional</sup> <a name="AppImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput"></a>

```go
func AppImageConfigNameInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `ImageVersionNumberInput`<sup>Optional</sup> <a name="ImageVersionNumberInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput"></a>

```go
func ImageVersionNumberInput() *f64
```

- *Type:* *f64

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```go
func AppImageConfigName() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `ImageVersionNumber`<sup>Required</sup> <a name="ImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```go
func ImageVersionNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">ResetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">ResetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">ResetTrainingPlanArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```go
func ResetLifecycleConfigArn()
```

##### `ResetSageMakerImageArn` <a name="ResetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```go
func ResetSageMakerImageArn()
```

##### `ResetSageMakerImageVersionArn` <a name="ResetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```go
func ResetSageMakerImageVersionArn()
```

##### `ResetTrainingPlanArn` <a name="ResetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```go
func ResetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">SageMakerImageArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">SageMakerImageVersionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">TrainingPlanArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">SageMakerImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">SageMakerImageVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```go
func LifecycleConfigArnInput() *string
```

- *Type:* *string

---

##### `SageMakerImageArnInput`<sup>Optional</sup> <a name="SageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```go
func SageMakerImageArnInput() *string
```

- *Type:* *string

---

##### `SageMakerImageVersionArnInput`<sup>Optional</sup> <a name="SageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```go
func SageMakerImageVersionArnInput() *string
```

- *Type:* *string

---

##### `TrainingPlanArnInput`<sup>Optional</sup> <a name="TrainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```go
func TrainingPlanArnInput() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```go
func LifecycleConfigArn() *string
```

- *Type:* *string

---

##### `SageMakerImageArn`<sup>Required</sup> <a name="SageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```go
func SageMakerImageArn() *string
```

- *Type:* *string

---

##### `SageMakerImageVersionArn`<sup>Required</sup> <a name="SageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```go
func SageMakerImageVersionArn() *string
```

- *Type:* *string

---

##### `TrainingPlanArn`<sup>Required</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```go
func TrainingPlanArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetAssumableRoleArns">ResetAssumableRoleArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetExecutionRoleArns">ResetExecutionRoleArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAssumableRoleArns` <a name="ResetAssumableRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetAssumableRoleArns"></a>

```go
func ResetAssumableRoleArns()
```

##### `ResetExecutionRoleArns` <a name="ResetExecutionRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.resetExecutionRoleArns"></a>

```go
func ResetExecutionRoleArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArnsInput">AssumableRoleArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArnsInput">ExecutionRoleArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArns">AssumableRoleArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArns">ExecutionRoleArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AssumableRoleArnsInput`<sup>Optional</sup> <a name="AssumableRoleArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArnsInput"></a>

```go
func AssumableRoleArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExecutionRoleArnsInput`<sup>Optional</sup> <a name="ExecutionRoleArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArnsInput"></a>

```go
func ExecutionRoleArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AssumableRoleArns`<sup>Required</sup> <a name="AssumableRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.assumableRoleArns"></a>

```go
func AssumableRoleArns() *[]*string
```

- *Type:* *[]*string

---

##### `ExecutionRoleArns`<sup>Required</sup> <a name="ExecutionRoleArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.executionRoleArns"></a>

```go
func ExecutionRoleArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement">PutAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories">PutCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImages">PutCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putEmrSettings">PutEmrSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement">ResetAppLifecycleManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetBuiltInLifecycleConfigArn">ResetBuiltInLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCodeRepositories">ResetCodeRepositories</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCustomImages">ResetCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec">ResetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetEmrSettings">ResetEmrSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetLifecycleConfigArns">ResetLifecycleConfigArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAppLifecycleManagement` <a name="PutAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement"></a>

```go
func PutAppLifecycleManagement(value SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putAppLifecycleManagement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagement</a>

---

##### `PutCodeRepositories` <a name="PutCodeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories"></a>

```go
func PutCodeRepositories(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCodeRepositories.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomImages` <a name="PutCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImages"></a>

```go
func PutCustomImages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putCustomImages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec"></a>

```go
func PutDefaultResourceSpec(value SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpec</a>

---

##### `PutEmrSettings` <a name="PutEmrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putEmrSettings"></a>

```go
func PutEmrSettings(value SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.putEmrSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettings</a>

---

##### `ResetAppLifecycleManagement` <a name="ResetAppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetAppLifecycleManagement"></a>

```go
func ResetAppLifecycleManagement()
```

##### `ResetBuiltInLifecycleConfigArn` <a name="ResetBuiltInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetBuiltInLifecycleConfigArn"></a>

```go
func ResetBuiltInLifecycleConfigArn()
```

##### `ResetCodeRepositories` <a name="ResetCodeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCodeRepositories"></a>

```go
func ResetCodeRepositories()
```

##### `ResetCustomImages` <a name="ResetCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetCustomImages"></a>

```go
func ResetCustomImages()
```

##### `ResetDefaultResourceSpec` <a name="ResetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```go
func ResetDefaultResourceSpec()
```

##### `ResetEmrSettings` <a name="ResetEmrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetEmrSettings"></a>

```go
func ResetEmrSettings()
```

##### `ResetLifecycleConfigArns` <a name="ResetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```go
func ResetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement">AppLifecycleManagement</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories">CodeRepositories</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImages">CustomImages</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettings">EmrSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput">AppLifecycleManagementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArnInput">BuiltInLifecycleConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoriesInput">CodeRepositoriesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImagesInput">CustomImagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettingsInput">EmrSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArnsInput">LifecycleConfigArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArn">BuiltInLifecycleConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppLifecycleManagement`<sup>Required</sup> <a name="AppLifecycleManagement" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagement"></a>

```go
func AppLifecycleManagement() SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsAppLifecycleManagementOutputReference</a>

---

##### `CodeRepositories`<sup>Required</sup> <a name="CodeRepositories" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositories"></a>

```go
func CodeRepositories() SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCodeRepositoriesList</a>

---

##### `CustomImages`<sup>Required</sup> <a name="CustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImages"></a>

```go
func CustomImages() SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsJupyterLabAppSettingsCustomImagesList</a>

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpec"></a>

```go
func DefaultResourceSpec() SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `EmrSettings`<sup>Required</sup> <a name="EmrSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettings"></a>

```go
func EmrSettings() SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsEmrSettingsOutputReference</a>

---

##### `AppLifecycleManagementInput`<sup>Optional</sup> <a name="AppLifecycleManagementInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.appLifecycleManagementInput"></a>

```go
func AppLifecycleManagementInput() interface{}
```

- *Type:* interface{}

---

##### `BuiltInLifecycleConfigArnInput`<sup>Optional</sup> <a name="BuiltInLifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArnInput"></a>

```go
func BuiltInLifecycleConfigArnInput() *string
```

- *Type:* *string

---

##### `CodeRepositoriesInput`<sup>Optional</sup> <a name="CodeRepositoriesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.codeRepositoriesInput"></a>

```go
func CodeRepositoriesInput() interface{}
```

- *Type:* interface{}

---

##### `CustomImagesInput`<sup>Optional</sup> <a name="CustomImagesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.customImagesInput"></a>

```go
func CustomImagesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```go
func DefaultResourceSpecInput() interface{}
```

- *Type:* interface{}

---

##### `EmrSettingsInput`<sup>Optional</sup> <a name="EmrSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.emrSettingsInput"></a>

```go
func EmrSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleConfigArnsInput`<sup>Optional</sup> <a name="LifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```go
func LifecycleConfigArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BuiltInLifecycleConfigArn`<sup>Required</sup> <a name="BuiltInLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.builtInLifecycleConfigArn"></a>

```go
func BuiltInLifecycleConfigArn() *string
```

- *Type:* *string

---

##### `LifecycleConfigArns`<sup>Required</sup> <a name="LifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```go
func LifecycleConfigArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">ResetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">ResetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">ResetTrainingPlanArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```go
func ResetLifecycleConfigArn()
```

##### `ResetSageMakerImageArn` <a name="ResetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```go
func ResetSageMakerImageArn()
```

##### `ResetSageMakerImageVersionArn` <a name="ResetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```go
func ResetSageMakerImageVersionArn()
```

##### `ResetTrainingPlanArn` <a name="ResetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```go
func ResetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">SageMakerImageArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">SageMakerImageVersionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">TrainingPlanArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">SageMakerImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">SageMakerImageVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```go
func LifecycleConfigArnInput() *string
```

- *Type:* *string

---

##### `SageMakerImageArnInput`<sup>Optional</sup> <a name="SageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```go
func SageMakerImageArnInput() *string
```

- *Type:* *string

---

##### `SageMakerImageVersionArnInput`<sup>Optional</sup> <a name="SageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```go
func SageMakerImageVersionArnInput() *string
```

- *Type:* *string

---

##### `TrainingPlanArnInput`<sup>Optional</sup> <a name="TrainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```go
func TrainingPlanArnInput() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```go
func LifecycleConfigArn() *string
```

- *Type:* *string

---

##### `SageMakerImageArn`<sup>Required</sup> <a name="SageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```go
func SageMakerImageArn() *string
```

- *Type:* *string

---

##### `SageMakerImageVersionArn`<sup>Required</sup> <a name="SageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```go
func SageMakerImageVersionArn() *string
```

- *Type:* *string

---

##### `TrainingPlanArn`<sup>Required</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```go
func TrainingPlanArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec">ResetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns">ResetLifecycleConfigArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec"></a>

```go
func PutDefaultResourceSpec(value SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpec</a>

---

##### `ResetDefaultResourceSpec` <a name="ResetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```go
func ResetDefaultResourceSpec()
```

##### `ResetLifecycleConfigArns` <a name="ResetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```go
func ResetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput">LifecycleConfigArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpec"></a>

```go
func DefaultResourceSpec() SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```go
func DefaultResourceSpecInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleConfigArnsInput`<sup>Optional</sup> <a name="LifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```go
func LifecycleConfigArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LifecycleConfigArns`<sup>Required</sup> <a name="LifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```go
func LifecycleConfigArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get"></a>

```go
func Get(index *f64) SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetAppImageConfigName">ResetAppImageConfigName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageName">ResetImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageVersionNumber">ResetImageVersionNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAppImageConfigName` <a name="ResetAppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetAppImageConfigName"></a>

```go
func ResetAppImageConfigName()
```

##### `ResetImageName` <a name="ResetImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageName"></a>

```go
func ResetImageName()
```

##### `ResetImageVersionNumber` <a name="ResetImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.resetImageVersionNumber"></a>

```go
func ResetImageVersionNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput">AppImageConfigNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageNameInput">ImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput">ImageVersionNumberInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName">AppImageConfigName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName">ImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber">ImageVersionNumber</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AppImageConfigNameInput`<sup>Optional</sup> <a name="AppImageConfigNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigNameInput"></a>

```go
func AppImageConfigNameInput() *string
```

- *Type:* *string

---

##### `ImageNameInput`<sup>Optional</sup> <a name="ImageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageNameInput"></a>

```go
func ImageNameInput() *string
```

- *Type:* *string

---

##### `ImageVersionNumberInput`<sup>Optional</sup> <a name="ImageVersionNumberInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumberInput"></a>

```go
func ImageVersionNumberInput() *f64
```

- *Type:* *f64

---

##### `AppImageConfigName`<sup>Required</sup> <a name="AppImageConfigName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.appImageConfigName"></a>

```go
func AppImageConfigName() *string
```

- *Type:* *string

---

##### `ImageName`<sup>Required</sup> <a name="ImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageName"></a>

```go
func ImageName() *string
```

- *Type:* *string

---

##### `ImageVersionNumber`<sup>Required</sup> <a name="ImageVersionNumber" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.imageVersionNumber"></a>

```go
func ImageVersionNumber() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType">ResetInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn">ResetLifecycleConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn">ResetSageMakerImageArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn">ResetSageMakerImageVersionArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn">ResetTrainingPlanArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceType` <a name="ResetInstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetInstanceType"></a>

```go
func ResetInstanceType()
```

##### `ResetLifecycleConfigArn` <a name="ResetLifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetLifecycleConfigArn"></a>

```go
func ResetLifecycleConfigArn()
```

##### `ResetSageMakerImageArn` <a name="ResetSageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageArn"></a>

```go
func ResetSageMakerImageArn()
```

##### `ResetSageMakerImageVersionArn` <a name="ResetSageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetSageMakerImageVersionArn"></a>

```go
func ResetSageMakerImageVersionArn()
```

##### `ResetTrainingPlanArn` <a name="ResetTrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.resetTrainingPlanArn"></a>

```go
func ResetTrainingPlanArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput">InstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput">LifecycleConfigArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput">SageMakerImageArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput">SageMakerImageVersionArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput">TrainingPlanArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType">InstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn">LifecycleConfigArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn">SageMakerImageArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn">SageMakerImageVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn">TrainingPlanArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceTypeInput`<sup>Optional</sup> <a name="InstanceTypeInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceTypeInput"></a>

```go
func InstanceTypeInput() *string
```

- *Type:* *string

---

##### `LifecycleConfigArnInput`<sup>Optional</sup> <a name="LifecycleConfigArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArnInput"></a>

```go
func LifecycleConfigArnInput() *string
```

- *Type:* *string

---

##### `SageMakerImageArnInput`<sup>Optional</sup> <a name="SageMakerImageArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArnInput"></a>

```go
func SageMakerImageArnInput() *string
```

- *Type:* *string

---

##### `SageMakerImageVersionArnInput`<sup>Optional</sup> <a name="SageMakerImageVersionArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArnInput"></a>

```go
func SageMakerImageVersionArnInput() *string
```

- *Type:* *string

---

##### `TrainingPlanArnInput`<sup>Optional</sup> <a name="TrainingPlanArnInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArnInput"></a>

```go
func TrainingPlanArnInput() *string
```

- *Type:* *string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.instanceType"></a>

```go
func InstanceType() *string
```

- *Type:* *string

---

##### `LifecycleConfigArn`<sup>Required</sup> <a name="LifecycleConfigArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.lifecycleConfigArn"></a>

```go
func LifecycleConfigArn() *string
```

- *Type:* *string

---

##### `SageMakerImageArn`<sup>Required</sup> <a name="SageMakerImageArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageArn"></a>

```go
func SageMakerImageArn() *string
```

- *Type:* *string

---

##### `SageMakerImageVersionArn`<sup>Required</sup> <a name="SageMakerImageVersionArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.sageMakerImageVersionArn"></a>

```go
func SageMakerImageVersionArn() *string
```

- *Type:* *string

---

##### `TrainingPlanArn`<sup>Required</sup> <a name="TrainingPlanArn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.trainingPlanArn"></a>

```go
func TrainingPlanArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImages">PutCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec">PutDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImages">ResetCustomImages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec">ResetDefaultResourceSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns">ResetLifecycleConfigArns</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomImages` <a name="PutCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImages"></a>

```go
func PutCustomImages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putCustomImages.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultResourceSpec` <a name="PutDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec"></a>

```go
func PutDefaultResourceSpec(value SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.putDefaultResourceSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpec</a>

---

##### `ResetCustomImages` <a name="ResetCustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetCustomImages"></a>

```go
func ResetCustomImages()
```

##### `ResetDefaultResourceSpec` <a name="ResetDefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetDefaultResourceSpec"></a>

```go
func ResetDefaultResourceSpec()
```

##### `ResetLifecycleConfigArns` <a name="ResetLifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.resetLifecycleConfigArns"></a>

```go
func ResetLifecycleConfigArns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImages">CustomImages</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec">DefaultResourceSpec</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImagesInput">CustomImagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput">DefaultResourceSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput">LifecycleConfigArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns">LifecycleConfigArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomImages`<sup>Required</sup> <a name="CustomImages" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImages"></a>

```go
func CustomImages() SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsCustomImagesList</a>

---

##### `DefaultResourceSpec`<sup>Required</sup> <a name="DefaultResourceSpec" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpec"></a>

```go
func DefaultResourceSpec() SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsDefaultResourceSpecOutputReference</a>

---

##### `CustomImagesInput`<sup>Optional</sup> <a name="CustomImagesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.customImagesInput"></a>

```go
func CustomImagesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultResourceSpecInput`<sup>Optional</sup> <a name="DefaultResourceSpecInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.defaultResourceSpecInput"></a>

```go
func DefaultResourceSpecInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleConfigArnsInput`<sup>Optional</sup> <a name="LifecycleConfigArnsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArnsInput"></a>

```go
func LifecycleConfigArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `LifecycleConfigArns`<sup>Required</sup> <a name="LifecycleConfigArns" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.lifecycleConfigArns"></a>

```go
func LifecycleConfigArns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsOutputReference <a name="SagemakerUserProfileUserSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings">PutCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfigs">PutCustomFileSystemConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig">PutCustomPosixUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings">PutJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings">PutJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings">PutKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings">PutRStudioServerProAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings">PutSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings">PutSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putStudioWebPortalSettings">PutStudioWebPortalSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetAutoMountHomeEfs">ResetAutoMountHomeEfs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCodeEditorAppSettings">ResetCodeEditorAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomFileSystemConfigs">ResetCustomFileSystemConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomPosixUserConfig">ResetCustomPosixUserConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetDefaultLandingUri">ResetDefaultLandingUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetExecutionRole">ResetExecutionRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterLabAppSettings">ResetJupyterLabAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterServerAppSettings">ResetJupyterServerAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetKernelGatewayAppSettings">ResetKernelGatewayAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRStudioServerProAppSettings">ResetRStudioServerProAppSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSecurityGroups">ResetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSharingSettings">ResetSharingSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSpaceStorageSettings">ResetSpaceStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortal">ResetStudioWebPortal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortalSettings">ResetStudioWebPortalSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeEditorAppSettings` <a name="PutCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings"></a>

```go
func PutCodeEditorAppSettings(value SagemakerUserProfileUserSettingsCodeEditorAppSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCodeEditorAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettings">SagemakerUserProfileUserSettingsCodeEditorAppSettings</a>

---

##### `PutCustomFileSystemConfigs` <a name="PutCustomFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfigs"></a>

```go
func PutCustomFileSystemConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomFileSystemConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCustomPosixUserConfig` <a name="PutCustomPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig"></a>

```go
func PutCustomPosixUserConfig(value SagemakerUserProfileUserSettingsCustomPosixUserConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putCustomPosixUserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfig">SagemakerUserProfileUserSettingsCustomPosixUserConfig</a>

---

##### `PutJupyterLabAppSettings` <a name="PutJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings"></a>

```go
func PutJupyterLabAppSettings(value SagemakerUserProfileUserSettingsJupyterLabAppSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterLabAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettings">SagemakerUserProfileUserSettingsJupyterLabAppSettings</a>

---

##### `PutJupyterServerAppSettings` <a name="PutJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings"></a>

```go
func PutJupyterServerAppSettings(value SagemakerUserProfileUserSettingsJupyterServerAppSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putJupyterServerAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettings">SagemakerUserProfileUserSettingsJupyterServerAppSettings</a>

---

##### `PutKernelGatewayAppSettings` <a name="PutKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings"></a>

```go
func PutKernelGatewayAppSettings(value SagemakerUserProfileUserSettingsKernelGatewayAppSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putKernelGatewayAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettings">SagemakerUserProfileUserSettingsKernelGatewayAppSettings</a>

---

##### `PutRStudioServerProAppSettings` <a name="PutRStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings"></a>

```go
func PutRStudioServerProAppSettings(value SagemakerUserProfileUserSettingsRStudioServerProAppSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putRStudioServerProAppSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettings">SagemakerUserProfileUserSettingsRStudioServerProAppSettings</a>

---

##### `PutSharingSettings` <a name="PutSharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings"></a>

```go
func PutSharingSettings(value SagemakerUserProfileUserSettingsSharingSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSharingSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettings">SagemakerUserProfileUserSettingsSharingSettings</a>

---

##### `PutSpaceStorageSettings` <a name="PutSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings"></a>

```go
func PutSpaceStorageSettings(value SagemakerUserProfileUserSettingsSpaceStorageSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putSpaceStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettings</a>

---

##### `PutStudioWebPortalSettings` <a name="PutStudioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putStudioWebPortalSettings"></a>

```go
func PutStudioWebPortalSettings(value SagemakerUserProfileUserSettingsStudioWebPortalSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.putStudioWebPortalSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettings">SagemakerUserProfileUserSettingsStudioWebPortalSettings</a>

---

##### `ResetAutoMountHomeEfs` <a name="ResetAutoMountHomeEfs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetAutoMountHomeEfs"></a>

```go
func ResetAutoMountHomeEfs()
```

##### `ResetCodeEditorAppSettings` <a name="ResetCodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCodeEditorAppSettings"></a>

```go
func ResetCodeEditorAppSettings()
```

##### `ResetCustomFileSystemConfigs` <a name="ResetCustomFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomFileSystemConfigs"></a>

```go
func ResetCustomFileSystemConfigs()
```

##### `ResetCustomPosixUserConfig` <a name="ResetCustomPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetCustomPosixUserConfig"></a>

```go
func ResetCustomPosixUserConfig()
```

##### `ResetDefaultLandingUri` <a name="ResetDefaultLandingUri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetDefaultLandingUri"></a>

```go
func ResetDefaultLandingUri()
```

##### `ResetExecutionRole` <a name="ResetExecutionRole" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetExecutionRole"></a>

```go
func ResetExecutionRole()
```

##### `ResetJupyterLabAppSettings` <a name="ResetJupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterLabAppSettings"></a>

```go
func ResetJupyterLabAppSettings()
```

##### `ResetJupyterServerAppSettings` <a name="ResetJupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetJupyterServerAppSettings"></a>

```go
func ResetJupyterServerAppSettings()
```

##### `ResetKernelGatewayAppSettings` <a name="ResetKernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetKernelGatewayAppSettings"></a>

```go
func ResetKernelGatewayAppSettings()
```

##### `ResetRStudioServerProAppSettings` <a name="ResetRStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetRStudioServerProAppSettings"></a>

```go
func ResetRStudioServerProAppSettings()
```

##### `ResetSecurityGroups` <a name="ResetSecurityGroups" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSecurityGroups"></a>

```go
func ResetSecurityGroups()
```

##### `ResetSharingSettings` <a name="ResetSharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSharingSettings"></a>

```go
func ResetSharingSettings()
```

##### `ResetSpaceStorageSettings` <a name="ResetSpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetSpaceStorageSettings"></a>

```go
func ResetSpaceStorageSettings()
```

##### `ResetStudioWebPortal` <a name="ResetStudioWebPortal" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortal"></a>

```go
func ResetStudioWebPortal()
```

##### `ResetStudioWebPortalSettings` <a name="ResetStudioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.resetStudioWebPortalSettings"></a>

```go
func ResetStudioWebPortalSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettings">CodeEditorAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigs">CustomFileSystemConfigs</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList">SagemakerUserProfileUserSettingsCustomFileSystemConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfig">CustomPosixUserConfig</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference">SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettings">JupyterLabAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings">JupyterServerAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings">KernelGatewayAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettings">RStudioServerProAppSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference">SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettings">SharingSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference">SagemakerUserProfileUserSettingsSharingSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettings">SpaceStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettings">StudioWebPortalSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference">SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfsInput">AutoMountHomeEfsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettingsInput">CodeEditorAppSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigsInput">CustomFileSystemConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfigInput">CustomPosixUserConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUriInput">DefaultLandingUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRoleInput">ExecutionRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettingsInput">JupyterLabAppSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettingsInput">JupyterServerAppSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettingsInput">KernelGatewayAppSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettingsInput">RStudioServerProAppSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroupsInput">SecurityGroupsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettingsInput">SharingSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettingsInput">SpaceStorageSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalInput">StudioWebPortalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettingsInput">StudioWebPortalSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfs">AutoMountHomeEfs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUri">DefaultLandingUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRole">ExecutionRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroups">SecurityGroups</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortal">StudioWebPortal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeEditorAppSettings`<sup>Required</sup> <a name="CodeEditorAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettings"></a>

```go
func CodeEditorAppSettings() SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference">SagemakerUserProfileUserSettingsCodeEditorAppSettingsOutputReference</a>

---

##### `CustomFileSystemConfigs`<sup>Required</sup> <a name="CustomFileSystemConfigs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigs"></a>

```go
func CustomFileSystemConfigs() SagemakerUserProfileUserSettingsCustomFileSystemConfigsList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomFileSystemConfigsList">SagemakerUserProfileUserSettingsCustomFileSystemConfigsList</a>

---

##### `CustomPosixUserConfig`<sup>Required</sup> <a name="CustomPosixUserConfig" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfig"></a>

```go
func CustomPosixUserConfig() SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference">SagemakerUserProfileUserSettingsCustomPosixUserConfigOutputReference</a>

---

##### `JupyterLabAppSettings`<sup>Required</sup> <a name="JupyterLabAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettings"></a>

```go
func JupyterLabAppSettings() SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterLabAppSettingsOutputReference</a>

---

##### `JupyterServerAppSettings`<sup>Required</sup> <a name="JupyterServerAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettings"></a>

```go
func JupyterServerAppSettings() SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference">SagemakerUserProfileUserSettingsJupyterServerAppSettingsOutputReference</a>

---

##### `KernelGatewayAppSettings`<sup>Required</sup> <a name="KernelGatewayAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettings"></a>

```go
func KernelGatewayAppSettings() SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference">SagemakerUserProfileUserSettingsKernelGatewayAppSettingsOutputReference</a>

---

##### `RStudioServerProAppSettings`<sup>Required</sup> <a name="RStudioServerProAppSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettings"></a>

```go
func RStudioServerProAppSettings() SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference">SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference</a>

---

##### `SharingSettings`<sup>Required</sup> <a name="SharingSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettings"></a>

```go
func SharingSettings() SagemakerUserProfileUserSettingsSharingSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference">SagemakerUserProfileUserSettingsSharingSettingsOutputReference</a>

---

##### `SpaceStorageSettings`<sup>Required</sup> <a name="SpaceStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettings"></a>

```go
func SpaceStorageSettings() SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference</a>

---

##### `StudioWebPortalSettings`<sup>Required</sup> <a name="StudioWebPortalSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettings"></a>

```go
func StudioWebPortalSettings() SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference">SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference</a>

---

##### `AutoMountHomeEfsInput`<sup>Optional</sup> <a name="AutoMountHomeEfsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfsInput"></a>

```go
func AutoMountHomeEfsInput() *string
```

- *Type:* *string

---

##### `CodeEditorAppSettingsInput`<sup>Optional</sup> <a name="CodeEditorAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.codeEditorAppSettingsInput"></a>

```go
func CodeEditorAppSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomFileSystemConfigsInput`<sup>Optional</sup> <a name="CustomFileSystemConfigsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customFileSystemConfigsInput"></a>

```go
func CustomFileSystemConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `CustomPosixUserConfigInput`<sup>Optional</sup> <a name="CustomPosixUserConfigInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.customPosixUserConfigInput"></a>

```go
func CustomPosixUserConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultLandingUriInput`<sup>Optional</sup> <a name="DefaultLandingUriInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUriInput"></a>

```go
func DefaultLandingUriInput() *string
```

- *Type:* *string

---

##### `ExecutionRoleInput`<sup>Optional</sup> <a name="ExecutionRoleInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRoleInput"></a>

```go
func ExecutionRoleInput() *string
```

- *Type:* *string

---

##### `JupyterLabAppSettingsInput`<sup>Optional</sup> <a name="JupyterLabAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterLabAppSettingsInput"></a>

```go
func JupyterLabAppSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `JupyterServerAppSettingsInput`<sup>Optional</sup> <a name="JupyterServerAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.jupyterServerAppSettingsInput"></a>

```go
func JupyterServerAppSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `KernelGatewayAppSettingsInput`<sup>Optional</sup> <a name="KernelGatewayAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.kernelGatewayAppSettingsInput"></a>

```go
func KernelGatewayAppSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `RStudioServerProAppSettingsInput`<sup>Optional</sup> <a name="RStudioServerProAppSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.rStudioServerProAppSettingsInput"></a>

```go
func RStudioServerProAppSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupsInput`<sup>Optional</sup> <a name="SecurityGroupsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroupsInput"></a>

```go
func SecurityGroupsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SharingSettingsInput`<sup>Optional</sup> <a name="SharingSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.sharingSettingsInput"></a>

```go
func SharingSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `SpaceStorageSettingsInput`<sup>Optional</sup> <a name="SpaceStorageSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.spaceStorageSettingsInput"></a>

```go
func SpaceStorageSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `StudioWebPortalInput`<sup>Optional</sup> <a name="StudioWebPortalInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalInput"></a>

```go
func StudioWebPortalInput() *string
```

- *Type:* *string

---

##### `StudioWebPortalSettingsInput`<sup>Optional</sup> <a name="StudioWebPortalSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortalSettingsInput"></a>

```go
func StudioWebPortalSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoMountHomeEfs`<sup>Required</sup> <a name="AutoMountHomeEfs" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.autoMountHomeEfs"></a>

```go
func AutoMountHomeEfs() *string
```

- *Type:* *string

---

##### `DefaultLandingUri`<sup>Required</sup> <a name="DefaultLandingUri" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.defaultLandingUri"></a>

```go
func DefaultLandingUri() *string
```

- *Type:* *string

---

##### `ExecutionRole`<sup>Required</sup> <a name="ExecutionRole" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.executionRole"></a>

```go
func ExecutionRole() *string
```

- *Type:* *string

---

##### `SecurityGroups`<sup>Required</sup> <a name="SecurityGroups" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.securityGroups"></a>

```go
func SecurityGroups() *[]*string
```

- *Type:* *[]*string

---

##### `StudioWebPortal`<sup>Required</sup> <a name="StudioWebPortal" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.studioWebPortal"></a>

```go
func StudioWebPortal() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference <a name="SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetAccessStatus">ResetAccessStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetUserGroup">ResetUserGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessStatus` <a name="ResetAccessStatus" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetAccessStatus"></a>

```go
func ResetAccessStatus()
```

##### `ResetUserGroup` <a name="ResetUserGroup" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.resetUserGroup"></a>

```go
func ResetUserGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatusInput">AccessStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroupInput">UserGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatus">AccessStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroup">UserGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessStatusInput`<sup>Optional</sup> <a name="AccessStatusInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatusInput"></a>

```go
func AccessStatusInput() *string
```

- *Type:* *string

---

##### `UserGroupInput`<sup>Optional</sup> <a name="UserGroupInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroupInput"></a>

```go
func UserGroupInput() *string
```

- *Type:* *string

---

##### `AccessStatus`<sup>Required</sup> <a name="AccessStatus" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.accessStatus"></a>

```go
func AccessStatus() *string
```

- *Type:* *string

---

##### `UserGroup`<sup>Required</sup> <a name="UserGroup" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.userGroup"></a>

```go
func UserGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsRStudioServerProAppSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsSharingSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSharingSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsSharingSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsSharingSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption">ResetNotebookOutputOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId">ResetS3KmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3OutputPath">ResetS3OutputPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNotebookOutputOption` <a name="ResetNotebookOutputOption" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetNotebookOutputOption"></a>

```go
func ResetNotebookOutputOption()
```

##### `ResetS3KmsKeyId` <a name="ResetS3KmsKeyId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3KmsKeyId"></a>

```go
func ResetS3KmsKeyId()
```

##### `ResetS3OutputPath` <a name="ResetS3OutputPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.resetS3OutputPath"></a>

```go
func ResetS3OutputPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput">NotebookOutputOptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput">S3KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput">S3OutputPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption">NotebookOutputOption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId">S3KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath">S3OutputPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotebookOutputOptionInput`<sup>Optional</sup> <a name="NotebookOutputOptionInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOptionInput"></a>

```go
func NotebookOutputOptionInput() *string
```

- *Type:* *string

---

##### `S3KmsKeyIdInput`<sup>Optional</sup> <a name="S3KmsKeyIdInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyIdInput"></a>

```go
func S3KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `S3OutputPathInput`<sup>Optional</sup> <a name="S3OutputPathInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPathInput"></a>

```go
func S3OutputPathInput() *string
```

- *Type:* *string

---

##### `NotebookOutputOption`<sup>Required</sup> <a name="NotebookOutputOption" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.notebookOutputOption"></a>

```go
func NotebookOutputOption() *string
```

- *Type:* *string

---

##### `S3KmsKeyId`<sup>Required</sup> <a name="S3KmsKeyId" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3KmsKeyId"></a>

```go
func S3KmsKeyId() *string
```

- *Type:* *string

---

##### `S3OutputPath`<sup>Required</sup> <a name="S3OutputPath" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.s3OutputPath"></a>

```go
func S3OutputPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSharingSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetDefaultEbsVolumeSizeInGb">ResetDefaultEbsVolumeSizeInGb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetMaximumEbsVolumeSizeInGb">ResetMaximumEbsVolumeSizeInGb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultEbsVolumeSizeInGb` <a name="ResetDefaultEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetDefaultEbsVolumeSizeInGb"></a>

```go
func ResetDefaultEbsVolumeSizeInGb()
```

##### `ResetMaximumEbsVolumeSizeInGb` <a name="ResetMaximumEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.resetMaximumEbsVolumeSizeInGb"></a>

```go
func ResetMaximumEbsVolumeSizeInGb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGbInput">DefaultEbsVolumeSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGbInput">MaximumEbsVolumeSizeInGbInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGb">DefaultEbsVolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGb">MaximumEbsVolumeSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultEbsVolumeSizeInGbInput`<sup>Optional</sup> <a name="DefaultEbsVolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGbInput"></a>

```go
func DefaultEbsVolumeSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `MaximumEbsVolumeSizeInGbInput`<sup>Optional</sup> <a name="MaximumEbsVolumeSizeInGbInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGbInput"></a>

```go
func MaximumEbsVolumeSizeInGbInput() *f64
```

- *Type:* *f64

---

##### `DefaultEbsVolumeSizeInGb`<sup>Required</sup> <a name="DefaultEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.defaultEbsVolumeSizeInGb"></a>

```go
func DefaultEbsVolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `MaximumEbsVolumeSizeInGb`<sup>Required</sup> <a name="MaximumEbsVolumeSizeInGb" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.maximumEbsVolumeSizeInGb"></a>

```go
func MaximumEbsVolumeSizeInGb() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference <a name="SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings">PutDefaultEbsStorageSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resetDefaultEbsStorageSettings">ResetDefaultEbsStorageSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDefaultEbsStorageSettings` <a name="PutDefaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings"></a>

```go
func PutDefaultEbsStorageSettings(value SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.putDefaultEbsStorageSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettings</a>

---

##### `ResetDefaultEbsStorageSettings` <a name="ResetDefaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.resetDefaultEbsStorageSettings"></a>

```go
func ResetDefaultEbsStorageSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettings">DefaultEbsStorageSettings</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettingsInput">DefaultEbsStorageSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultEbsStorageSettings`<sup>Required</sup> <a name="DefaultEbsStorageSettings" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettings"></a>

```go
func DefaultEbsStorageSettings() SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference">SagemakerUserProfileUserSettingsSpaceStorageSettingsDefaultEbsStorageSettingsOutputReference</a>

---

##### `DefaultEbsStorageSettingsInput`<sup>Optional</sup> <a name="DefaultEbsStorageSettingsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.defaultEbsStorageSettingsInput"></a>

```go
func DefaultEbsStorageSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsSpaceStorageSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get"></a>

```go
func Get(index *f64) SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetSageMakerImageName">ResetSageMakerImageName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetVersionAliases">ResetVersionAliases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSageMakerImageName` <a name="ResetSageMakerImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetSageMakerImageName"></a>

```go
func ResetSageMakerImageName()
```

##### `ResetVersionAliases` <a name="ResetVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.resetVersionAliases"></a>

```go
func ResetVersionAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageNameInput">SageMakerImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliasesInput">VersionAliasesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageName">SageMakerImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliases">VersionAliases</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SageMakerImageNameInput`<sup>Optional</sup> <a name="SageMakerImageNameInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageNameInput"></a>

```go
func SageMakerImageNameInput() *string
```

- *Type:* *string

---

##### `VersionAliasesInput`<sup>Optional</sup> <a name="VersionAliasesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliasesInput"></a>

```go
func VersionAliasesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SageMakerImageName`<sup>Required</sup> <a name="SageMakerImageName" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.sageMakerImageName"></a>

```go
func SageMakerImageName() *string
```

- *Type:* *string

---

##### `VersionAliases`<sup>Required</sup> <a name="VersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.versionAliases"></a>

```go
func VersionAliases() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference <a name="SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/sagemakeruserprofile"

sagemakeruserprofile.NewSagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.putHiddenSageMakerImageVersionAliases">PutHiddenSageMakerImageVersionAliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenAppTypes">ResetHiddenAppTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenInstanceTypes">ResetHiddenInstanceTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenMlTools">ResetHiddenMlTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenSageMakerImageVersionAliases">ResetHiddenSageMakerImageVersionAliases</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHiddenSageMakerImageVersionAliases` <a name="PutHiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.putHiddenSageMakerImageVersionAliases"></a>

```go
func PutHiddenSageMakerImageVersionAliases(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.putHiddenSageMakerImageVersionAliases.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHiddenAppTypes` <a name="ResetHiddenAppTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenAppTypes"></a>

```go
func ResetHiddenAppTypes()
```

##### `ResetHiddenInstanceTypes` <a name="ResetHiddenInstanceTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenInstanceTypes"></a>

```go
func ResetHiddenInstanceTypes()
```

##### `ResetHiddenMlTools` <a name="ResetHiddenMlTools" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenMlTools"></a>

```go
func ResetHiddenMlTools()
```

##### `ResetHiddenSageMakerImageVersionAliases` <a name="ResetHiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.resetHiddenSageMakerImageVersionAliases"></a>

```go
func ResetHiddenSageMakerImageVersionAliases()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliases">HiddenSageMakerImageVersionAliases</a></code> | <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypesInput">HiddenAppTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypesInput">HiddenInstanceTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlToolsInput">HiddenMlToolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliasesInput">HiddenSageMakerImageVersionAliasesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypes">HiddenAppTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypes">HiddenInstanceTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlTools">HiddenMlTools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HiddenSageMakerImageVersionAliases`<sup>Required</sup> <a name="HiddenSageMakerImageVersionAliases" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliases"></a>

```go
func HiddenSageMakerImageVersionAliases() SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList
```

- *Type:* <a href="#@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList">SagemakerUserProfileUserSettingsStudioWebPortalSettingsHiddenSageMakerImageVersionAliasesList</a>

---

##### `HiddenAppTypesInput`<sup>Optional</sup> <a name="HiddenAppTypesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypesInput"></a>

```go
func HiddenAppTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `HiddenInstanceTypesInput`<sup>Optional</sup> <a name="HiddenInstanceTypesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypesInput"></a>

```go
func HiddenInstanceTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `HiddenMlToolsInput`<sup>Optional</sup> <a name="HiddenMlToolsInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlToolsInput"></a>

```go
func HiddenMlToolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HiddenSageMakerImageVersionAliasesInput`<sup>Optional</sup> <a name="HiddenSageMakerImageVersionAliasesInput" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenSageMakerImageVersionAliasesInput"></a>

```go
func HiddenSageMakerImageVersionAliasesInput() interface{}
```

- *Type:* interface{}

---

##### `HiddenAppTypes`<sup>Required</sup> <a name="HiddenAppTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenAppTypes"></a>

```go
func HiddenAppTypes() *[]*string
```

- *Type:* *[]*string

---

##### `HiddenInstanceTypes`<sup>Required</sup> <a name="HiddenInstanceTypes" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenInstanceTypes"></a>

```go
func HiddenInstanceTypes() *[]*string
```

- *Type:* *[]*string

---

##### `HiddenMlTools`<sup>Required</sup> <a name="HiddenMlTools" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.hiddenMlTools"></a>

```go
func HiddenMlTools() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.sagemakerUserProfile.SagemakerUserProfileUserSettingsStudioWebPortalSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



