# `personalizeDataset` Submodule <a name="`personalizeDataset` Submodule" id="@cdktn/provider-awscc.personalizeDataset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersonalizeDataset <a name="PersonalizeDataset" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset awscc_personalize_dataset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

personalizedataset.NewPersonalizeDataset(scope Construct, id *string, config PersonalizeDatasetConfig) PersonalizeDataset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig">PersonalizeDatasetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig">PersonalizeDatasetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob">PutDatasetImportJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetDatasetImportJob">ResetDatasetImportJob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDatasetImportJob` <a name="PutDatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob"></a>

```go
func PutDatasetImportJob(value PersonalizeDatasetDatasetImportJob)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putDatasetImportJob.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatasetImportJob` <a name="ResetDatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetDatasetImportJob"></a>

```go
func ResetDatasetImportJob()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PersonalizeDataset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

personalizedataset.PersonalizeDataset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

personalizedataset.PersonalizeDataset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

personalizedataset.PersonalizeDataset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

personalizedataset.PersonalizeDataset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PersonalizeDataset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PersonalizeDataset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PersonalizeDataset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PersonalizeDataset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetArn">DatasetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJob">DatasetImportJob</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference">PersonalizeDatasetDatasetImportJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList">PersonalizeDatasetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArnInput">DatasetGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJobInput">DatasetImportJobInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetTypeInput">DatasetTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArnInput">SchemaArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArn">DatasetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetType">DatasetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetArn`<sup>Required</sup> <a name="DatasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetArn"></a>

```go
func DatasetArn() *string
```

- *Type:* *string

---

##### `DatasetImportJob`<sup>Required</sup> <a name="DatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJob"></a>

```go
func DatasetImportJob() PersonalizeDatasetDatasetImportJobOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference">PersonalizeDatasetDatasetImportJobOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tags"></a>

```go
func Tags() PersonalizeDatasetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList">PersonalizeDatasetTagsList</a>

---

##### `DatasetGroupArnInput`<sup>Optional</sup> <a name="DatasetGroupArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArnInput"></a>

```go
func DatasetGroupArnInput() *string
```

- *Type:* *string

---

##### `DatasetImportJobInput`<sup>Optional</sup> <a name="DatasetImportJobInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetImportJobInput"></a>

```go
func DatasetImportJobInput() interface{}
```

- *Type:* interface{}

---

##### `DatasetTypeInput`<sup>Optional</sup> <a name="DatasetTypeInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetTypeInput"></a>

```go
func DatasetTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaArnInput`<sup>Optional</sup> <a name="SchemaArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArnInput"></a>

```go
func SchemaArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DatasetGroupArn`<sup>Required</sup> <a name="DatasetGroupArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetGroupArn"></a>

```go
func DatasetGroupArn() *string
```

- *Type:* *string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.datasetType"></a>

```go
func DatasetType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.schemaArn"></a>

```go
func SchemaArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDataset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PersonalizeDatasetConfig <a name="PersonalizeDatasetConfig" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

&personalizedataset.PersonalizeDatasetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DatasetGroupArn: *string,
	DatasetType: *string,
	Name: *string,
	SchemaArn: *string,
	DatasetImportJob: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetGroupArn">DatasetGroupArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the dataset group to add the dataset to. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetType">DatasetType</a></code> | <code>*string</code> | The type of dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.name">Name</a></code> | <code>*string</code> | The name for the dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.schemaArn">SchemaArn</a></code> | <code>*string</code> | The ARN of the schema to associate with the dataset. The schema defines the dataset fields. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetImportJob">DatasetImportJob</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a></code> | Initial DatasetImportJob for the created dataset. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags used to organize, track, or control access for this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatasetGroupArn`<sup>Required</sup> <a name="DatasetGroupArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetGroupArn"></a>

```go
DatasetGroupArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the dataset group to add the dataset to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_group_arn PersonalizeDataset#dataset_group_arn}

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetType"></a>

```go
DatasetType *string
```

- *Type:* *string

The type of dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_type PersonalizeDataset#dataset_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#name PersonalizeDataset#name}

---

##### `SchemaArn`<sup>Required</sup> <a name="SchemaArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.schemaArn"></a>

```go
SchemaArn *string
```

- *Type:* *string

The ARN of the schema to associate with the dataset. The schema defines the dataset fields.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#schema_arn PersonalizeDataset#schema_arn}

---

##### `DatasetImportJob`<sup>Optional</sup> <a name="DatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.datasetImportJob"></a>

```go
DatasetImportJob PersonalizeDatasetDatasetImportJob
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob">PersonalizeDatasetDatasetImportJob</a>

Initial DatasetImportJob for the created dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_import_job PersonalizeDataset#dataset_import_job}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags used to organize, track, or control access for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#tags PersonalizeDataset#tags}

---

### PersonalizeDatasetDatasetImportJob <a name="PersonalizeDatasetDatasetImportJob" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

&personalizedataset.PersonalizeDatasetDatasetImportJob {
	DatasetArn: *string,
	DatasetImportJobArn: *string,
	DataSource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource,
	JobName: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetArn">DatasetArn</a></code> | <code>*string</code> | The ARN of the dataset that receives the imported data. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetImportJobArn">DatasetImportJobArn</a></code> | <code>*string</code> | The ARN of the dataset import job. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a></code> | The Amazon S3 bucket that contains the training data to import. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.jobName">JobName</a></code> | <code>*string</code> | The name for the dataset import job. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.roleArn">RoleArn</a></code> | <code>*string</code> | The ARN of the IAM role that has permissions to read from the Amazon S3 data source. |

---

##### `DatasetArn`<sup>Optional</sup> <a name="DatasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetArn"></a>

```go
DatasetArn *string
```

- *Type:* *string

The ARN of the dataset that receives the imported data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_arn PersonalizeDataset#dataset_arn}

---

##### `DatasetImportJobArn`<sup>Optional</sup> <a name="DatasetImportJobArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.datasetImportJobArn"></a>

```go
DatasetImportJobArn *string
```

- *Type:* *string

The ARN of the dataset import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#dataset_import_job_arn PersonalizeDataset#dataset_import_job_arn}

---

##### `DataSource`<sup>Optional</sup> <a name="DataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.dataSource"></a>

```go
DataSource PersonalizeDatasetDatasetImportJobDataSource
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

The Amazon S3 bucket that contains the training data to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#data_source PersonalizeDataset#data_source}

---

##### `JobName`<sup>Optional</sup> <a name="JobName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.jobName"></a>

```go
JobName *string
```

- *Type:* *string

The name for the dataset import job.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#job_name PersonalizeDataset#job_name}

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJob.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

The ARN of the IAM role that has permissions to read from the Amazon S3 data source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#role_arn PersonalizeDataset#role_arn}

---

### PersonalizeDatasetDatasetImportJobDataSource <a name="PersonalizeDatasetDatasetImportJobDataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

&personalizedataset.PersonalizeDatasetDatasetImportJobDataSource {
	DataLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.property.dataLocation">DataLocation</a></code> | <code>*string</code> | The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored. |

---

##### `DataLocation`<sup>Optional</sup> <a name="DataLocation" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource.property.dataLocation"></a>

```go
DataLocation *string
```

- *Type:* *string

The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#data_location PersonalizeDataset#data_location}

---

### PersonalizeDatasetTags <a name="PersonalizeDatasetTags" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

&personalizedataset.PersonalizeDatasetTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#key PersonalizeDataset#key}. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#value PersonalizeDataset#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#key PersonalizeDataset#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/personalize_dataset#value PersonalizeDataset#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersonalizeDatasetDatasetImportJobDataSourceOutputReference <a name="PersonalizeDatasetDatasetImportJobDataSourceOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

personalizedataset.NewPersonalizeDatasetDatasetImportJobDataSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PersonalizeDatasetDatasetImportJobDataSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resetDataLocation">ResetDataLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDataLocation` <a name="ResetDataLocation" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.resetDataLocation"></a>

```go
func ResetDataLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocationInput">DataLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocation">DataLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataLocationInput`<sup>Optional</sup> <a name="DataLocationInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocationInput"></a>

```go
func DataLocationInput() *string
```

- *Type:* *string

---

##### `DataLocation`<sup>Required</sup> <a name="DataLocation" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.dataLocation"></a>

```go
func DataLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeDatasetDatasetImportJobOutputReference <a name="PersonalizeDatasetDatasetImportJobOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

personalizedataset.NewPersonalizeDatasetDatasetImportJobOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PersonalizeDatasetDatasetImportJobOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource">PutDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetArn">ResetDatasetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetImportJobArn">ResetDatasetImportJobArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDataSource">ResetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetJobName">ResetJobName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataSource` <a name="PutDataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource"></a>

```go
func PutDataSource(value PersonalizeDatasetDatasetImportJobDataSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.putDataSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSource">PersonalizeDatasetDatasetImportJobDataSource</a>

---

##### `ResetDatasetArn` <a name="ResetDatasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetArn"></a>

```go
func ResetDatasetArn()
```

##### `ResetDatasetImportJobArn` <a name="ResetDatasetImportJobArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDatasetImportJobArn"></a>

```go
func ResetDatasetImportJobArn()
```

##### `ResetDataSource` <a name="ResetDataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetDataSource"></a>

```go
func ResetDataSource()
```

##### `ResetJobName` <a name="ResetJobName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetJobName"></a>

```go
func ResetJobName()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSource">DataSource</a></code> | <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference">PersonalizeDatasetDatasetImportJobDataSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArnInput">DatasetArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArnInput">DatasetImportJobArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSourceInput">DataSourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArn">DatasetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArn">DatasetImportJobArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSource`<sup>Required</sup> <a name="DataSource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSource"></a>

```go
func DataSource() PersonalizeDatasetDatasetImportJobDataSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobDataSourceOutputReference">PersonalizeDatasetDatasetImportJobDataSourceOutputReference</a>

---

##### `DatasetArnInput`<sup>Optional</sup> <a name="DatasetArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArnInput"></a>

```go
func DatasetArnInput() *string
```

- *Type:* *string

---

##### `DatasetImportJobArnInput`<sup>Optional</sup> <a name="DatasetImportJobArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArnInput"></a>

```go
func DatasetImportJobArnInput() *string
```

- *Type:* *string

---

##### `DataSourceInput`<sup>Optional</sup> <a name="DataSourceInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.dataSourceInput"></a>

```go
func DataSourceInput() interface{}
```

- *Type:* interface{}

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobNameInput"></a>

```go
func JobNameInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `DatasetArn`<sup>Required</sup> <a name="DatasetArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetArn"></a>

```go
func DatasetArn() *string
```

- *Type:* *string

---

##### `DatasetImportJobArn`<sup>Required</sup> <a name="DatasetImportJobArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.datasetImportJobArn"></a>

```go
func DatasetImportJobArn() *string
```

- *Type:* *string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetDatasetImportJobOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeDatasetTagsList <a name="PersonalizeDatasetTagsList" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

personalizedataset.NewPersonalizeDatasetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PersonalizeDatasetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get"></a>

```go
func Get(index *f64) PersonalizeDatasetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PersonalizeDatasetTagsOutputReference <a name="PersonalizeDatasetTagsOutputReference" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/personalizedataset"

personalizedataset.NewPersonalizeDatasetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PersonalizeDatasetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.personalizeDataset.PersonalizeDatasetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



