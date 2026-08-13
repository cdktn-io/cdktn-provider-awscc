# `iottwinmakerSyncJob` Submodule <a name="`iottwinmakerSyncJob` Submodule" id="@cdktn/provider-awscc.iottwinmakerSyncJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IottwinmakerSyncJob <a name="IottwinmakerSyncJob" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iottwinmaker_sync_job awscc_iottwinmaker_sync_job}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakersyncjob"

iottwinmakersyncjob.NewIottwinmakerSyncJob(scope Construct, id *string, config IottwinmakerSyncJobConfig) IottwinmakerSyncJob
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig">IottwinmakerSyncJobConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig">IottwinmakerSyncJobConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IottwinmakerSyncJob resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakersyncjob"

iottwinmakersyncjob.IottwinmakerSyncJob_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakersyncjob"

iottwinmakersyncjob.IottwinmakerSyncJob_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakersyncjob"

iottwinmakersyncjob.IottwinmakerSyncJob_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakersyncjob"

iottwinmakersyncjob.IottwinmakerSyncJob_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IottwinmakerSyncJob resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IottwinmakerSyncJob to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IottwinmakerSyncJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iottwinmaker_sync_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IottwinmakerSyncJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.creationDateTime">CreationDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.updateDateTime">UpdateDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncRoleInput">SyncRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncSourceInput">SyncSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncRole">SyncRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncSource">SyncSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationDateTime`<sup>Required</sup> <a name="CreationDateTime" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.creationDateTime"></a>

```go
func CreationDateTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdateDateTime`<sup>Required</sup> <a name="UpdateDateTime" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.updateDateTime"></a>

```go
func UpdateDateTime() *string
```

- *Type:* *string

---

##### `SyncRoleInput`<sup>Optional</sup> <a name="SyncRoleInput" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncRoleInput"></a>

```go
func SyncRoleInput() *string
```

- *Type:* *string

---

##### `SyncSourceInput`<sup>Optional</sup> <a name="SyncSourceInput" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncSourceInput"></a>

```go
func SyncSourceInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `SyncRole`<sup>Required</sup> <a name="SyncRole" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncRole"></a>

```go
func SyncRole() *string
```

- *Type:* *string

---

##### `SyncSource`<sup>Required</sup> <a name="SyncSource" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.syncSource"></a>

```go
func SyncSource() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJob.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IottwinmakerSyncJobConfig <a name="IottwinmakerSyncJobConfig" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakersyncjob"

&iottwinmakersyncjob.IottwinmakerSyncJobConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SyncRole: *string,
	SyncSource: *string,
	WorkspaceId: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.syncRole">SyncRole</a></code> | <code>*string</code> | The IAM Role that execute SyncJob. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.syncSource">SyncSource</a></code> | <code>*string</code> | The source of the SyncJob. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | The ID of the workspace. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SyncRole`<sup>Required</sup> <a name="SyncRole" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.syncRole"></a>

```go
SyncRole *string
```

- *Type:* *string

The IAM Role that execute SyncJob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iottwinmaker_sync_job#sync_role IottwinmakerSyncJob#sync_role}

---

##### `SyncSource`<sup>Required</sup> <a name="SyncSource" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.syncSource"></a>

```go
SyncSource *string
```

- *Type:* *string

The source of the SyncJob.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iottwinmaker_sync_job#sync_source IottwinmakerSyncJob#sync_source}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

The ID of the workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iottwinmaker_sync_job#workspace_id IottwinmakerSyncJob#workspace_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iottwinmakerSyncJob.IottwinmakerSyncJobConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iottwinmaker_sync_job#tags IottwinmakerSyncJob#tags}

---



