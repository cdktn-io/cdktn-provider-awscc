# `wellarchitectedProfile` Submodule <a name="`wellarchitectedProfile` Submodule" id="@cdktn/provider-awscc.wellarchitectedProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WellarchitectedProfile <a name="WellarchitectedProfile" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wellarchitected_profile awscc_wellarchitected_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

wellarchitectedprofile.NewWellarchitectedProfile(scope Construct, id *string, config WellarchitectedProfileConfig) WellarchitectedProfile
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig">WellarchitectedProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig">WellarchitectedProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putProfileQuestions">PutProfileQuestions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProfileQuestions` <a name="PutProfileQuestions" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putProfileQuestions"></a>

```go
func PutProfileQuestions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putProfileQuestions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WellarchitectedProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

wellarchitectedprofile.WellarchitectedProfile_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

wellarchitectedprofile.WellarchitectedProfile_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

wellarchitectedprofile.WellarchitectedProfile_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

wellarchitectedprofile.WellarchitectedProfile_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WellarchitectedProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WellarchitectedProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WellarchitectedProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wellarchitected_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WellarchitectedProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileArn">ProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileQuestions">ProfileQuestions</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList">WellarchitectedProfileProfileQuestionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileVersion">ProfileVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList">WellarchitectedProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileDescriptionInput">ProfileDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileNameInput">ProfileNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileQuestionsInput">ProfileQuestionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileDescription">ProfileDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileName">ProfileName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ProfileArn`<sup>Required</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileArn"></a>

```go
func ProfileArn() *string
```

- *Type:* *string

---

##### `ProfileQuestions`<sup>Required</sup> <a name="ProfileQuestions" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileQuestions"></a>

```go
func ProfileQuestions() WellarchitectedProfileProfileQuestionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList">WellarchitectedProfileProfileQuestionsList</a>

---

##### `ProfileVersion`<sup>Required</sup> <a name="ProfileVersion" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileVersion"></a>

```go
func ProfileVersion() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tags"></a>

```go
func Tags() WellarchitectedProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList">WellarchitectedProfileTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ProfileDescriptionInput`<sup>Optional</sup> <a name="ProfileDescriptionInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileDescriptionInput"></a>

```go
func ProfileDescriptionInput() *string
```

- *Type:* *string

---

##### `ProfileNameInput`<sup>Optional</sup> <a name="ProfileNameInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileNameInput"></a>

```go
func ProfileNameInput() *string
```

- *Type:* *string

---

##### `ProfileQuestionsInput`<sup>Optional</sup> <a name="ProfileQuestionsInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileQuestionsInput"></a>

```go
func ProfileQuestionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ProfileDescription`<sup>Required</sup> <a name="ProfileDescription" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileDescription"></a>

```go
func ProfileDescription() *string
```

- *Type:* *string

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.profileName"></a>

```go
func ProfileName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfile.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WellarchitectedProfileConfig <a name="WellarchitectedProfileConfig" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

&wellarchitectedprofile.WellarchitectedProfileConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ProfileDescription: *string,
	ProfileName: *string,
	ProfileQuestions: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileDescription">ProfileDescription</a></code> | <code>*string</code> | The profile description. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileName">ProfileName</a></code> | <code>*string</code> | The name of the profile. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileQuestions">ProfileQuestions</a></code> | <code>interface{}</code> | The profile questions. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags assigned to the profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProfileDescription`<sup>Required</sup> <a name="ProfileDescription" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileDescription"></a>

```go
ProfileDescription *string
```

- *Type:* *string

The profile description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wellarchitected_profile#profile_description WellarchitectedProfile#profile_description}

---

##### `ProfileName`<sup>Required</sup> <a name="ProfileName" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileName"></a>

```go
ProfileName *string
```

- *Type:* *string

The name of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wellarchitected_profile#profile_name WellarchitectedProfile#profile_name}

---

##### `ProfileQuestions`<sup>Required</sup> <a name="ProfileQuestions" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.profileQuestions"></a>

```go
ProfileQuestions interface{}
```

- *Type:* interface{}

The profile questions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wellarchitected_profile#profile_questions WellarchitectedProfile#profile_questions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags assigned to the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wellarchitected_profile#tags WellarchitectedProfile#tags}

---

### WellarchitectedProfileProfileQuestions <a name="WellarchitectedProfileProfileQuestions" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

&wellarchitectedprofile.WellarchitectedProfileProfileQuestions {
	QuestionId: *string,
	SelectedChoiceIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions.property.questionId">QuestionId</a></code> | <code>*string</code> | The ID of the question. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions.property.selectedChoiceIds">SelectedChoiceIds</a></code> | <code>*[]*string</code> | The selected choices. |

---

##### `QuestionId`<sup>Optional</sup> <a name="QuestionId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions.property.questionId"></a>

```go
QuestionId *string
```

- *Type:* *string

The ID of the question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wellarchitected_profile#question_id WellarchitectedProfile#question_id}

---

##### `SelectedChoiceIds`<sup>Optional</sup> <a name="SelectedChoiceIds" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestions.property.selectedChoiceIds"></a>

```go
SelectedChoiceIds *[]*string
```

- *Type:* *[]*string

The selected choices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wellarchitected_profile#selected_choice_ids WellarchitectedProfile#selected_choice_ids}

---

### WellarchitectedProfileTags <a name="WellarchitectedProfileTags" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

&wellarchitectedprofile.WellarchitectedProfileTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wellarchitected_profile#key WellarchitectedProfile#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/wellarchitected_profile#value WellarchitectedProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WellarchitectedProfileProfileQuestionsList <a name="WellarchitectedProfileProfileQuestionsList" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

wellarchitectedprofile.NewWellarchitectedProfileProfileQuestionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WellarchitectedProfileProfileQuestionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.get"></a>

```go
func Get(index *f64) WellarchitectedProfileProfileQuestionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WellarchitectedProfileProfileQuestionsOutputReference <a name="WellarchitectedProfileProfileQuestionsOutputReference" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

wellarchitectedprofile.NewWellarchitectedProfileProfileQuestionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WellarchitectedProfileProfileQuestionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resetQuestionId">ResetQuestionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resetSelectedChoiceIds">ResetSelectedChoiceIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuestionId` <a name="ResetQuestionId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resetQuestionId"></a>

```go
func ResetQuestionId()
```

##### `ResetSelectedChoiceIds` <a name="ResetSelectedChoiceIds" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.resetSelectedChoiceIds"></a>

```go
func ResetSelectedChoiceIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.questionIdInput">QuestionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.selectedChoiceIdsInput">SelectedChoiceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.questionId">QuestionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.selectedChoiceIds">SelectedChoiceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QuestionIdInput`<sup>Optional</sup> <a name="QuestionIdInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.questionIdInput"></a>

```go
func QuestionIdInput() *string
```

- *Type:* *string

---

##### `SelectedChoiceIdsInput`<sup>Optional</sup> <a name="SelectedChoiceIdsInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.selectedChoiceIdsInput"></a>

```go
func SelectedChoiceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `QuestionId`<sup>Required</sup> <a name="QuestionId" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.questionId"></a>

```go
func QuestionId() *string
```

- *Type:* *string

---

##### `SelectedChoiceIds`<sup>Required</sup> <a name="SelectedChoiceIds" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.selectedChoiceIds"></a>

```go
func SelectedChoiceIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileProfileQuestionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WellarchitectedProfileTagsList <a name="WellarchitectedProfileTagsList" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

wellarchitectedprofile.NewWellarchitectedProfileTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WellarchitectedProfileTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.get"></a>

```go
func Get(index *f64) WellarchitectedProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WellarchitectedProfileTagsOutputReference <a name="WellarchitectedProfileTagsOutputReference" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wellarchitectedprofile"

wellarchitectedprofile.NewWellarchitectedProfileTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WellarchitectedProfileTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wellarchitectedProfile.WellarchitectedProfileTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



