# `s3StorageLensGroup` Submodule <a name="`s3StorageLensGroup` Submodule" id="@cdktn/provider-awscc.s3StorageLensGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3StorageLensGroup <a name="S3StorageLensGroup" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group awscc_s3_storage_lens_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroup(scope Construct, id *string, config S3StorageLensGroupConfig) S3StorageLensGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig">S3StorageLensGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig">S3StorageLensGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFilter` <a name="PutFilter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter"></a>

```go
func PutFilter(value S3StorageLensGroupFilter)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3StorageLensGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.S3StorageLensGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.S3StorageLensGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.S3StorageLensGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.S3StorageLensGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a S3StorageLensGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3StorageLensGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3StorageLensGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the S3StorageLensGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference">S3StorageLensGroupFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.storageLensGroupArn">StorageLensGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList">S3StorageLensGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filter"></a>

```go
func Filter() S3StorageLensGroupFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference">S3StorageLensGroupFilterOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `StorageLensGroupArn`<sup>Required</sup> <a name="StorageLensGroupArn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.storageLensGroupArn"></a>

```go
func StorageLensGroupArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tags"></a>

```go
func Tags() S3StorageLensGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList">S3StorageLensGroupTagsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3StorageLensGroupConfig <a name="S3StorageLensGroupConfig" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3StorageLensGroup.S3StorageLensGroupFilter,
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.filter">Filter</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a></code> | Sets the Storage Lens Group filter. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.name">Name</a></code> | <code>*string</code> | The name that identifies the Amazon S3 Storage Lens Group. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.filter"></a>

```go
Filter S3StorageLensGroupFilter
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter">S3StorageLensGroupFilter</a>

Sets the Storage Lens Group filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#filter S3StorageLensGroup#filter}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name that identifies the Amazon S3 Storage Lens Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#name S3StorageLensGroup#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#tags S3StorageLensGroup#tags}

---

### S3StorageLensGroupFilter <a name="S3StorageLensGroupFilter" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilter {
	And: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd,
	MatchAnyPrefix: *[]*string,
	MatchAnySuffix: *[]*string,
	MatchAnyTag: interface{},
	MatchObjectAge: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge,
	MatchObjectSize: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize,
	Or: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.and">And</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a></code> | The Storage Lens group will include objects that match all of the specified filter values. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyPrefix">MatchAnyPrefix</a></code> | <code>*[]*string</code> | Filter to match any of the specified prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnySuffix">MatchAnySuffix</a></code> | <code>*[]*string</code> | Filter to match any of the specified suffixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyTag">MatchAnyTag</a></code> | <code>interface{}</code> | Filter to match any of the specified object tags. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectAge">MatchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a></code> | Filter to match all of the specified values for the minimum and maximum object age. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectSize">MatchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a></code> | Filter to match all of the specified values for the minimum and maximum object size. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.or">Or</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a></code> | The Storage Lens group will include objects that match any of the specified filter values. |

---

##### `And`<sup>Optional</sup> <a name="And" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.and"></a>

```go
And S3StorageLensGroupFilterAnd
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a>

The Storage Lens group will include objects that match all of the specified filter values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#and S3StorageLensGroup#and}

---

##### `MatchAnyPrefix`<sup>Optional</sup> <a name="MatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyPrefix"></a>

```go
MatchAnyPrefix *[]*string
```

- *Type:* *[]*string

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

##### `MatchAnySuffix`<sup>Optional</sup> <a name="MatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnySuffix"></a>

```go
MatchAnySuffix *[]*string
```

- *Type:* *[]*string

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

##### `MatchAnyTag`<sup>Optional</sup> <a name="MatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchAnyTag"></a>

```go
MatchAnyTag interface{}
```

- *Type:* interface{}

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

##### `MatchObjectAge`<sup>Optional</sup> <a name="MatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectAge"></a>

```go
MatchObjectAge S3StorageLensGroupFilterMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

##### `MatchObjectSize`<sup>Optional</sup> <a name="MatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.matchObjectSize"></a>

```go
MatchObjectSize S3StorageLensGroupFilterMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

##### `Or`<sup>Optional</sup> <a name="Or" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilter.property.or"></a>

```go
Or S3StorageLensGroupFilterOr
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a>

The Storage Lens group will include objects that match any of the specified filter values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#or S3StorageLensGroup#or}

---

### S3StorageLensGroupFilterAnd <a name="S3StorageLensGroupFilterAnd" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilterAnd {
	MatchAnyPrefix: *[]*string,
	MatchAnySuffix: *[]*string,
	MatchAnyTag: interface{},
	MatchObjectAge: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge,
	MatchObjectSize: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyPrefix">MatchAnyPrefix</a></code> | <code>*[]*string</code> | Filter to match any of the specified prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnySuffix">MatchAnySuffix</a></code> | <code>*[]*string</code> | Filter to match any of the specified suffixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyTag">MatchAnyTag</a></code> | <code>interface{}</code> | Filter to match any of the specified object tags. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectAge">MatchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a></code> | Filter to match all of the specified values for the minimum and maximum object age. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectSize">MatchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a></code> | Filter to match all of the specified values for the minimum and maximum object size. |

---

##### `MatchAnyPrefix`<sup>Optional</sup> <a name="MatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyPrefix"></a>

```go
MatchAnyPrefix *[]*string
```

- *Type:* *[]*string

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

##### `MatchAnySuffix`<sup>Optional</sup> <a name="MatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnySuffix"></a>

```go
MatchAnySuffix *[]*string
```

- *Type:* *[]*string

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

##### `MatchAnyTag`<sup>Optional</sup> <a name="MatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchAnyTag"></a>

```go
MatchAnyTag interface{}
```

- *Type:* interface{}

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

##### `MatchObjectAge`<sup>Optional</sup> <a name="MatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectAge"></a>

```go
MatchObjectAge S3StorageLensGroupFilterAndMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

##### `MatchObjectSize`<sup>Optional</sup> <a name="MatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd.property.matchObjectSize"></a>

```go
MatchObjectSize S3StorageLensGroupFilterAndMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

### S3StorageLensGroupFilterAndMatchAnyTag <a name="S3StorageLensGroupFilterAndMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilterAndMatchAnyTag {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

### S3StorageLensGroupFilterAndMatchObjectAge <a name="S3StorageLensGroupFilterAndMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilterAndMatchObjectAge {
	DaysGreaterThan: *f64,
	DaysLessThan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysGreaterThan">DaysGreaterThan</a></code> | <code>*f64</code> | Minimum object age to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysLessThan">DaysLessThan</a></code> | <code>*f64</code> | Maximum object age to which the rule applies. |

---

##### `DaysGreaterThan`<sup>Optional</sup> <a name="DaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysGreaterThan"></a>

```go
DaysGreaterThan *f64
```

- *Type:* *f64

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

##### `DaysLessThan`<sup>Optional</sup> <a name="DaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge.property.daysLessThan"></a>

```go
DaysLessThan *f64
```

- *Type:* *f64

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

### S3StorageLensGroupFilterAndMatchObjectSize <a name="S3StorageLensGroupFilterAndMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilterAndMatchObjectSize {
	BytesGreaterThan: *f64,
	BytesLessThan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesGreaterThan">BytesGreaterThan</a></code> | <code>*f64</code> | Minimum object size to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesLessThan">BytesLessThan</a></code> | <code>*f64</code> | Maximum object size to which the rule applies. |

---

##### `BytesGreaterThan`<sup>Optional</sup> <a name="BytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesGreaterThan"></a>

```go
BytesGreaterThan *f64
```

- *Type:* *f64

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

##### `BytesLessThan`<sup>Optional</sup> <a name="BytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize.property.bytesLessThan"></a>

```go
BytesLessThan *f64
```

- *Type:* *f64

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

### S3StorageLensGroupFilterMatchAnyTag <a name="S3StorageLensGroupFilterMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilterMatchAnyTag {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

### S3StorageLensGroupFilterMatchObjectAge <a name="S3StorageLensGroupFilterMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilterMatchObjectAge {
	DaysGreaterThan: *f64,
	DaysLessThan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysGreaterThan">DaysGreaterThan</a></code> | <code>*f64</code> | Minimum object age to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysLessThan">DaysLessThan</a></code> | <code>*f64</code> | Maximum object age to which the rule applies. |

---

##### `DaysGreaterThan`<sup>Optional</sup> <a name="DaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysGreaterThan"></a>

```go
DaysGreaterThan *f64
```

- *Type:* *f64

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

##### `DaysLessThan`<sup>Optional</sup> <a name="DaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge.property.daysLessThan"></a>

```go
DaysLessThan *f64
```

- *Type:* *f64

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

### S3StorageLensGroupFilterMatchObjectSize <a name="S3StorageLensGroupFilterMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilterMatchObjectSize {
	BytesGreaterThan: *f64,
	BytesLessThan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesGreaterThan">BytesGreaterThan</a></code> | <code>*f64</code> | Minimum object size to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesLessThan">BytesLessThan</a></code> | <code>*f64</code> | Maximum object size to which the rule applies. |

---

##### `BytesGreaterThan`<sup>Optional</sup> <a name="BytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesGreaterThan"></a>

```go
BytesGreaterThan *f64
```

- *Type:* *f64

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

##### `BytesLessThan`<sup>Optional</sup> <a name="BytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize.property.bytesLessThan"></a>

```go
BytesLessThan *f64
```

- *Type:* *f64

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

### S3StorageLensGroupFilterOr <a name="S3StorageLensGroupFilterOr" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilterOr {
	MatchAnyPrefix: *[]*string,
	MatchAnySuffix: *[]*string,
	MatchAnyTag: interface{},
	MatchObjectAge: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge,
	MatchObjectSize: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyPrefix">MatchAnyPrefix</a></code> | <code>*[]*string</code> | Filter to match any of the specified prefixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnySuffix">MatchAnySuffix</a></code> | <code>*[]*string</code> | Filter to match any of the specified suffixes. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyTag">MatchAnyTag</a></code> | <code>interface{}</code> | Filter to match any of the specified object tags. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectAge">MatchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a></code> | Filter to match all of the specified values for the minimum and maximum object age. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectSize">MatchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a></code> | Filter to match all of the specified values for the minimum and maximum object size. |

---

##### `MatchAnyPrefix`<sup>Optional</sup> <a name="MatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyPrefix"></a>

```go
MatchAnyPrefix *[]*string
```

- *Type:* *[]*string

Filter to match any of the specified prefixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_prefix S3StorageLensGroup#match_any_prefix}

---

##### `MatchAnySuffix`<sup>Optional</sup> <a name="MatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnySuffix"></a>

```go
MatchAnySuffix *[]*string
```

- *Type:* *[]*string

Filter to match any of the specified suffixes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_suffix S3StorageLensGroup#match_any_suffix}

---

##### `MatchAnyTag`<sup>Optional</sup> <a name="MatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchAnyTag"></a>

```go
MatchAnyTag interface{}
```

- *Type:* interface{}

Filter to match any of the specified object tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_any_tag S3StorageLensGroup#match_any_tag}

---

##### `MatchObjectAge`<sup>Optional</sup> <a name="MatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectAge"></a>

```go
MatchObjectAge S3StorageLensGroupFilterOrMatchObjectAge
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a>

Filter to match all of the specified values for the minimum and maximum object age.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_age S3StorageLensGroup#match_object_age}

---

##### `MatchObjectSize`<sup>Optional</sup> <a name="MatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr.property.matchObjectSize"></a>

```go
MatchObjectSize S3StorageLensGroupFilterOrMatchObjectSize
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a>

Filter to match all of the specified values for the minimum and maximum object size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#match_object_size S3StorageLensGroup#match_object_size}

---

### S3StorageLensGroupFilterOrMatchAnyTag <a name="S3StorageLensGroupFilterOrMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilterOrMatchAnyTag {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTag.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

### S3StorageLensGroupFilterOrMatchObjectAge <a name="S3StorageLensGroupFilterOrMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilterOrMatchObjectAge {
	DaysGreaterThan: *f64,
	DaysLessThan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysGreaterThan">DaysGreaterThan</a></code> | <code>*f64</code> | Minimum object age to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysLessThan">DaysLessThan</a></code> | <code>*f64</code> | Maximum object age to which the rule applies. |

---

##### `DaysGreaterThan`<sup>Optional</sup> <a name="DaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysGreaterThan"></a>

```go
DaysGreaterThan *f64
```

- *Type:* *f64

Minimum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_greater_than S3StorageLensGroup#days_greater_than}

---

##### `DaysLessThan`<sup>Optional</sup> <a name="DaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge.property.daysLessThan"></a>

```go
DaysLessThan *f64
```

- *Type:* *f64

Maximum object age to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#days_less_than S3StorageLensGroup#days_less_than}

---

### S3StorageLensGroupFilterOrMatchObjectSize <a name="S3StorageLensGroupFilterOrMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupFilterOrMatchObjectSize {
	BytesGreaterThan: *f64,
	BytesLessThan: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesGreaterThan">BytesGreaterThan</a></code> | <code>*f64</code> | Minimum object size to which the rule applies. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesLessThan">BytesLessThan</a></code> | <code>*f64</code> | Maximum object size to which the rule applies. |

---

##### `BytesGreaterThan`<sup>Optional</sup> <a name="BytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesGreaterThan"></a>

```go
BytesGreaterThan *f64
```

- *Type:* *f64

Minimum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_greater_than S3StorageLensGroup#bytes_greater_than}

---

##### `BytesLessThan`<sup>Optional</sup> <a name="BytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize.property.bytesLessThan"></a>

```go
BytesLessThan *f64
```

- *Type:* *f64

Maximum object size to which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#bytes_less_than S3StorageLensGroup#bytes_less_than}

---

### S3StorageLensGroupTags <a name="S3StorageLensGroupTags" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

&s3storagelensgroup.S3StorageLensGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#key S3StorageLensGroup#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/s3_storage_lens_group#value S3StorageLensGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3StorageLensGroupFilterAndMatchAnyTagList <a name="S3StorageLensGroupFilterAndMatchAnyTagList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterAndMatchAnyTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3StorageLensGroupFilterAndMatchAnyTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.get"></a>

```go
func Get(index *f64) S3StorageLensGroupFilterAndMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterAndMatchAnyTagOutputReference <a name="S3StorageLensGroupFilterAndMatchAnyTagOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterAndMatchAnyTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3StorageLensGroupFilterAndMatchAnyTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterAndMatchObjectAgeOutputReference <a name="S3StorageLensGroupFilterAndMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterAndMatchObjectAgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3StorageLensGroupFilterAndMatchObjectAgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysGreaterThan">ResetDaysGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysLessThan">ResetDaysLessThan</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysGreaterThan` <a name="ResetDaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysGreaterThan"></a>

```go
func ResetDaysGreaterThan()
```

##### `ResetDaysLessThan` <a name="ResetDaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.resetDaysLessThan"></a>

```go
func ResetDaysLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThanInput">DaysGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThanInput">DaysLessThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan">DaysGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan">DaysLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysGreaterThanInput`<sup>Optional</sup> <a name="DaysGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThanInput"></a>

```go
func DaysGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `DaysLessThanInput`<sup>Optional</sup> <a name="DaysLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThanInput"></a>

```go
func DaysLessThanInput() *f64
```

- *Type:* *f64

---

##### `DaysGreaterThan`<sup>Required</sup> <a name="DaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```go
func DaysGreaterThan() *f64
```

- *Type:* *f64

---

##### `DaysLessThan`<sup>Required</sup> <a name="DaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.daysLessThan"></a>

```go
func DaysLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterAndMatchObjectSizeOutputReference <a name="S3StorageLensGroupFilterAndMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterAndMatchObjectSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3StorageLensGroupFilterAndMatchObjectSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesGreaterThan">ResetBytesGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesLessThan">ResetBytesLessThan</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBytesGreaterThan` <a name="ResetBytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesGreaterThan"></a>

```go
func ResetBytesGreaterThan()
```

##### `ResetBytesLessThan` <a name="ResetBytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.resetBytesLessThan"></a>

```go
func ResetBytesLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThanInput">BytesGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThanInput">BytesLessThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan">BytesGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan">BytesLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BytesGreaterThanInput`<sup>Optional</sup> <a name="BytesGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThanInput"></a>

```go
func BytesGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `BytesLessThanInput`<sup>Optional</sup> <a name="BytesLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThanInput"></a>

```go
func BytesLessThanInput() *f64
```

- *Type:* *f64

---

##### `BytesGreaterThan`<sup>Required</sup> <a name="BytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```go
func BytesGreaterThan() *f64
```

- *Type:* *f64

---

##### `BytesLessThan`<sup>Required</sup> <a name="BytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```go
func BytesLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterAndOutputReference <a name="S3StorageLensGroupFilterAndOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterAndOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3StorageLensGroupFilterAndOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchAnyTag">PutMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectAge">PutMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectSize">PutMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyPrefix">ResetMatchAnyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnySuffix">ResetMatchAnySuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyTag">ResetMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectAge">ResetMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectSize">ResetMatchObjectSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchAnyTag` <a name="PutMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchAnyTag"></a>

```go
func PutMatchAnyTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchAnyTag.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatchObjectAge` <a name="PutMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectAge"></a>

```go
func PutMatchObjectAge(value S3StorageLensGroupFilterAndMatchObjectAge)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectAge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAge">S3StorageLensGroupFilterAndMatchObjectAge</a>

---

##### `PutMatchObjectSize` <a name="PutMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectSize"></a>

```go
func PutMatchObjectSize(value S3StorageLensGroupFilterAndMatchObjectSize)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.putMatchObjectSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSize">S3StorageLensGroupFilterAndMatchObjectSize</a>

---

##### `ResetMatchAnyPrefix` <a name="ResetMatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyPrefix"></a>

```go
func ResetMatchAnyPrefix()
```

##### `ResetMatchAnySuffix` <a name="ResetMatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnySuffix"></a>

```go
func ResetMatchAnySuffix()
```

##### `ResetMatchAnyTag` <a name="ResetMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchAnyTag"></a>

```go
func ResetMatchAnyTag()
```

##### `ResetMatchObjectAge` <a name="ResetMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectAge"></a>

```go
func ResetMatchObjectAge()
```

##### `ResetMatchObjectSize` <a name="ResetMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.resetMatchObjectSize"></a>

```go
func ResetMatchObjectSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTag">MatchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList">S3StorageLensGroupFilterAndMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAge">MatchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference">S3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSize">MatchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference">S3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefixInput">MatchAnyPrefixInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffixInput">MatchAnySuffixInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTagInput">MatchAnyTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAgeInput">MatchObjectAgeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSizeInput">MatchObjectSizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix">MatchAnyPrefix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix">MatchAnySuffix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchAnyTag`<sup>Required</sup> <a name="MatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTag"></a>

```go
func MatchAnyTag() S3StorageLensGroupFilterAndMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchAnyTagList">S3StorageLensGroupFilterAndMatchAnyTagList</a>

---

##### `MatchObjectAge`<sup>Required</sup> <a name="MatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAge"></a>

```go
func MatchObjectAge() S3StorageLensGroupFilterAndMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectAgeOutputReference">S3StorageLensGroupFilterAndMatchObjectAgeOutputReference</a>

---

##### `MatchObjectSize`<sup>Required</sup> <a name="MatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSize"></a>

```go
func MatchObjectSize() S3StorageLensGroupFilterAndMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndMatchObjectSizeOutputReference">S3StorageLensGroupFilterAndMatchObjectSizeOutputReference</a>

---

##### `MatchAnyPrefixInput`<sup>Optional</sup> <a name="MatchAnyPrefixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefixInput"></a>

```go
func MatchAnyPrefixInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnySuffixInput`<sup>Optional</sup> <a name="MatchAnySuffixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffixInput"></a>

```go
func MatchAnySuffixInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnyTagInput`<sup>Optional</sup> <a name="MatchAnyTagInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyTagInput"></a>

```go
func MatchAnyTagInput() interface{}
```

- *Type:* interface{}

---

##### `MatchObjectAgeInput`<sup>Optional</sup> <a name="MatchObjectAgeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectAgeInput"></a>

```go
func MatchObjectAgeInput() interface{}
```

- *Type:* interface{}

---

##### `MatchObjectSizeInput`<sup>Optional</sup> <a name="MatchObjectSizeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchObjectSizeInput"></a>

```go
func MatchObjectSizeInput() interface{}
```

- *Type:* interface{}

---

##### `MatchAnyPrefix`<sup>Required</sup> <a name="MatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnyPrefix"></a>

```go
func MatchAnyPrefix() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnySuffix`<sup>Required</sup> <a name="MatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.matchAnySuffix"></a>

```go
func MatchAnySuffix() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterMatchAnyTagList <a name="S3StorageLensGroupFilterMatchAnyTagList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterMatchAnyTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3StorageLensGroupFilterMatchAnyTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.get"></a>

```go
func Get(index *f64) S3StorageLensGroupFilterMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterMatchAnyTagOutputReference <a name="S3StorageLensGroupFilterMatchAnyTagOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterMatchAnyTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3StorageLensGroupFilterMatchAnyTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterMatchObjectAgeOutputReference <a name="S3StorageLensGroupFilterMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterMatchObjectAgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3StorageLensGroupFilterMatchObjectAgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysGreaterThan">ResetDaysGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysLessThan">ResetDaysLessThan</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysGreaterThan` <a name="ResetDaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysGreaterThan"></a>

```go
func ResetDaysGreaterThan()
```

##### `ResetDaysLessThan` <a name="ResetDaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.resetDaysLessThan"></a>

```go
func ResetDaysLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThanInput">DaysGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThanInput">DaysLessThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan">DaysGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan">DaysLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysGreaterThanInput`<sup>Optional</sup> <a name="DaysGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThanInput"></a>

```go
func DaysGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `DaysLessThanInput`<sup>Optional</sup> <a name="DaysLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThanInput"></a>

```go
func DaysLessThanInput() *f64
```

- *Type:* *f64

---

##### `DaysGreaterThan`<sup>Required</sup> <a name="DaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```go
func DaysGreaterThan() *f64
```

- *Type:* *f64

---

##### `DaysLessThan`<sup>Required</sup> <a name="DaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.daysLessThan"></a>

```go
func DaysLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterMatchObjectSizeOutputReference <a name="S3StorageLensGroupFilterMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterMatchObjectSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3StorageLensGroupFilterMatchObjectSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesGreaterThan">ResetBytesGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesLessThan">ResetBytesLessThan</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBytesGreaterThan` <a name="ResetBytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesGreaterThan"></a>

```go
func ResetBytesGreaterThan()
```

##### `ResetBytesLessThan` <a name="ResetBytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.resetBytesLessThan"></a>

```go
func ResetBytesLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThanInput">BytesGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThanInput">BytesLessThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan">BytesGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan">BytesLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BytesGreaterThanInput`<sup>Optional</sup> <a name="BytesGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThanInput"></a>

```go
func BytesGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `BytesLessThanInput`<sup>Optional</sup> <a name="BytesLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThanInput"></a>

```go
func BytesLessThanInput() *f64
```

- *Type:* *f64

---

##### `BytesGreaterThan`<sup>Required</sup> <a name="BytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```go
func BytesGreaterThan() *f64
```

- *Type:* *f64

---

##### `BytesLessThan`<sup>Required</sup> <a name="BytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```go
func BytesLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterOrMatchAnyTagList <a name="S3StorageLensGroupFilterOrMatchAnyTagList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterOrMatchAnyTagList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3StorageLensGroupFilterOrMatchAnyTagList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.get"></a>

```go
func Get(index *f64) S3StorageLensGroupFilterOrMatchAnyTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterOrMatchAnyTagOutputReference <a name="S3StorageLensGroupFilterOrMatchAnyTagOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterOrMatchAnyTagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3StorageLensGroupFilterOrMatchAnyTagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterOrMatchObjectAgeOutputReference <a name="S3StorageLensGroupFilterOrMatchObjectAgeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterOrMatchObjectAgeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3StorageLensGroupFilterOrMatchObjectAgeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysGreaterThan">ResetDaysGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysLessThan">ResetDaysLessThan</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysGreaterThan` <a name="ResetDaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysGreaterThan"></a>

```go
func ResetDaysGreaterThan()
```

##### `ResetDaysLessThan` <a name="ResetDaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.resetDaysLessThan"></a>

```go
func ResetDaysLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThanInput">DaysGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThanInput">DaysLessThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan">DaysGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan">DaysLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysGreaterThanInput`<sup>Optional</sup> <a name="DaysGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThanInput"></a>

```go
func DaysGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `DaysLessThanInput`<sup>Optional</sup> <a name="DaysLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThanInput"></a>

```go
func DaysLessThanInput() *f64
```

- *Type:* *f64

---

##### `DaysGreaterThan`<sup>Required</sup> <a name="DaysGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysGreaterThan"></a>

```go
func DaysGreaterThan() *f64
```

- *Type:* *f64

---

##### `DaysLessThan`<sup>Required</sup> <a name="DaysLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.daysLessThan"></a>

```go
func DaysLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterOrMatchObjectSizeOutputReference <a name="S3StorageLensGroupFilterOrMatchObjectSizeOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterOrMatchObjectSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3StorageLensGroupFilterOrMatchObjectSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesGreaterThan">ResetBytesGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesLessThan">ResetBytesLessThan</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBytesGreaterThan` <a name="ResetBytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesGreaterThan"></a>

```go
func ResetBytesGreaterThan()
```

##### `ResetBytesLessThan` <a name="ResetBytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.resetBytesLessThan"></a>

```go
func ResetBytesLessThan()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThanInput">BytesGreaterThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThanInput">BytesLessThanInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan">BytesGreaterThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan">BytesLessThan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BytesGreaterThanInput`<sup>Optional</sup> <a name="BytesGreaterThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThanInput"></a>

```go
func BytesGreaterThanInput() *f64
```

- *Type:* *f64

---

##### `BytesLessThanInput`<sup>Optional</sup> <a name="BytesLessThanInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThanInput"></a>

```go
func BytesLessThanInput() *f64
```

- *Type:* *f64

---

##### `BytesGreaterThan`<sup>Required</sup> <a name="BytesGreaterThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesGreaterThan"></a>

```go
func BytesGreaterThan() *f64
```

- *Type:* *f64

---

##### `BytesLessThan`<sup>Required</sup> <a name="BytesLessThan" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.bytesLessThan"></a>

```go
func BytesLessThan() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterOrOutputReference <a name="S3StorageLensGroupFilterOrOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterOrOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3StorageLensGroupFilterOrOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchAnyTag">PutMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectAge">PutMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectSize">PutMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyPrefix">ResetMatchAnyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnySuffix">ResetMatchAnySuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyTag">ResetMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectAge">ResetMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectSize">ResetMatchObjectSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatchAnyTag` <a name="PutMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchAnyTag"></a>

```go
func PutMatchAnyTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchAnyTag.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatchObjectAge` <a name="PutMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectAge"></a>

```go
func PutMatchObjectAge(value S3StorageLensGroupFilterOrMatchObjectAge)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectAge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAge">S3StorageLensGroupFilterOrMatchObjectAge</a>

---

##### `PutMatchObjectSize` <a name="PutMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectSize"></a>

```go
func PutMatchObjectSize(value S3StorageLensGroupFilterOrMatchObjectSize)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.putMatchObjectSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSize">S3StorageLensGroupFilterOrMatchObjectSize</a>

---

##### `ResetMatchAnyPrefix` <a name="ResetMatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyPrefix"></a>

```go
func ResetMatchAnyPrefix()
```

##### `ResetMatchAnySuffix` <a name="ResetMatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnySuffix"></a>

```go
func ResetMatchAnySuffix()
```

##### `ResetMatchAnyTag` <a name="ResetMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchAnyTag"></a>

```go
func ResetMatchAnyTag()
```

##### `ResetMatchObjectAge` <a name="ResetMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectAge"></a>

```go
func ResetMatchObjectAge()
```

##### `ResetMatchObjectSize` <a name="ResetMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.resetMatchObjectSize"></a>

```go
func ResetMatchObjectSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTag">MatchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList">S3StorageLensGroupFilterOrMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAge">MatchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference">S3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSize">MatchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference">S3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefixInput">MatchAnyPrefixInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffixInput">MatchAnySuffixInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTagInput">MatchAnyTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAgeInput">MatchObjectAgeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSizeInput">MatchObjectSizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix">MatchAnyPrefix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix">MatchAnySuffix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchAnyTag`<sup>Required</sup> <a name="MatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTag"></a>

```go
func MatchAnyTag() S3StorageLensGroupFilterOrMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchAnyTagList">S3StorageLensGroupFilterOrMatchAnyTagList</a>

---

##### `MatchObjectAge`<sup>Required</sup> <a name="MatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAge"></a>

```go
func MatchObjectAge() S3StorageLensGroupFilterOrMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectAgeOutputReference">S3StorageLensGroupFilterOrMatchObjectAgeOutputReference</a>

---

##### `MatchObjectSize`<sup>Required</sup> <a name="MatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSize"></a>

```go
func MatchObjectSize() S3StorageLensGroupFilterOrMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrMatchObjectSizeOutputReference">S3StorageLensGroupFilterOrMatchObjectSizeOutputReference</a>

---

##### `MatchAnyPrefixInput`<sup>Optional</sup> <a name="MatchAnyPrefixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefixInput"></a>

```go
func MatchAnyPrefixInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnySuffixInput`<sup>Optional</sup> <a name="MatchAnySuffixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffixInput"></a>

```go
func MatchAnySuffixInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnyTagInput`<sup>Optional</sup> <a name="MatchAnyTagInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyTagInput"></a>

```go
func MatchAnyTagInput() interface{}
```

- *Type:* interface{}

---

##### `MatchObjectAgeInput`<sup>Optional</sup> <a name="MatchObjectAgeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectAgeInput"></a>

```go
func MatchObjectAgeInput() interface{}
```

- *Type:* interface{}

---

##### `MatchObjectSizeInput`<sup>Optional</sup> <a name="MatchObjectSizeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchObjectSizeInput"></a>

```go
func MatchObjectSizeInput() interface{}
```

- *Type:* interface{}

---

##### `MatchAnyPrefix`<sup>Required</sup> <a name="MatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnyPrefix"></a>

```go
func MatchAnyPrefix() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnySuffix`<sup>Required</sup> <a name="MatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.matchAnySuffix"></a>

```go
func MatchAnySuffix() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupFilterOutputReference <a name="S3StorageLensGroupFilterOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3StorageLensGroupFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd">PutAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchAnyTag">PutMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectAge">PutMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectSize">PutMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr">PutOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetAnd">ResetAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyPrefix">ResetMatchAnyPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnySuffix">ResetMatchAnySuffix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyTag">ResetMatchAnyTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectAge">ResetMatchObjectAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectSize">ResetMatchObjectSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetOr">ResetOr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnd` <a name="PutAnd" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd"></a>

```go
func PutAnd(value S3StorageLensGroupFilterAnd)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putAnd.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAnd">S3StorageLensGroupFilterAnd</a>

---

##### `PutMatchAnyTag` <a name="PutMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchAnyTag"></a>

```go
func PutMatchAnyTag(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchAnyTag.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMatchObjectAge` <a name="PutMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectAge"></a>

```go
func PutMatchObjectAge(value S3StorageLensGroupFilterMatchObjectAge)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectAge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAge">S3StorageLensGroupFilterMatchObjectAge</a>

---

##### `PutMatchObjectSize` <a name="PutMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectSize"></a>

```go
func PutMatchObjectSize(value S3StorageLensGroupFilterMatchObjectSize)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putMatchObjectSize.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSize">S3StorageLensGroupFilterMatchObjectSize</a>

---

##### `PutOr` <a name="PutOr" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr"></a>

```go
func PutOr(value S3StorageLensGroupFilterOr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.putOr.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOr">S3StorageLensGroupFilterOr</a>

---

##### `ResetAnd` <a name="ResetAnd" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetAnd"></a>

```go
func ResetAnd()
```

##### `ResetMatchAnyPrefix` <a name="ResetMatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyPrefix"></a>

```go
func ResetMatchAnyPrefix()
```

##### `ResetMatchAnySuffix` <a name="ResetMatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnySuffix"></a>

```go
func ResetMatchAnySuffix()
```

##### `ResetMatchAnyTag` <a name="ResetMatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchAnyTag"></a>

```go
func ResetMatchAnyTag()
```

##### `ResetMatchObjectAge` <a name="ResetMatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectAge"></a>

```go
func ResetMatchObjectAge()
```

##### `ResetMatchObjectSize` <a name="ResetMatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetMatchObjectSize"></a>

```go
func ResetMatchObjectSize()
```

##### `ResetOr` <a name="ResetOr" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.resetOr"></a>

```go
func ResetOr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.and">And</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference">S3StorageLensGroupFilterAndOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTag">MatchAnyTag</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList">S3StorageLensGroupFilterMatchAnyTagList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAge">MatchObjectAge</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference">S3StorageLensGroupFilterMatchObjectAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSize">MatchObjectSize</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference">S3StorageLensGroupFilterMatchObjectSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.or">Or</a></code> | <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference">S3StorageLensGroupFilterOrOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.andInput">AndInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefixInput">MatchAnyPrefixInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffixInput">MatchAnySuffixInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTagInput">MatchAnyTagInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAgeInput">MatchObjectAgeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSizeInput">MatchObjectSizeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.orInput">OrInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefix">MatchAnyPrefix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffix">MatchAnySuffix</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `And`<sup>Required</sup> <a name="And" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.and"></a>

```go
func And() S3StorageLensGroupFilterAndOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterAndOutputReference">S3StorageLensGroupFilterAndOutputReference</a>

---

##### `MatchAnyTag`<sup>Required</sup> <a name="MatchAnyTag" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTag"></a>

```go
func MatchAnyTag() S3StorageLensGroupFilterMatchAnyTagList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchAnyTagList">S3StorageLensGroupFilterMatchAnyTagList</a>

---

##### `MatchObjectAge`<sup>Required</sup> <a name="MatchObjectAge" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAge"></a>

```go
func MatchObjectAge() S3StorageLensGroupFilterMatchObjectAgeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectAgeOutputReference">S3StorageLensGroupFilterMatchObjectAgeOutputReference</a>

---

##### `MatchObjectSize`<sup>Required</sup> <a name="MatchObjectSize" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSize"></a>

```go
func MatchObjectSize() S3StorageLensGroupFilterMatchObjectSizeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterMatchObjectSizeOutputReference">S3StorageLensGroupFilterMatchObjectSizeOutputReference</a>

---

##### `Or`<sup>Required</sup> <a name="Or" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.or"></a>

```go
func Or() S3StorageLensGroupFilterOrOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOrOutputReference">S3StorageLensGroupFilterOrOutputReference</a>

---

##### `AndInput`<sup>Optional</sup> <a name="AndInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.andInput"></a>

```go
func AndInput() interface{}
```

- *Type:* interface{}

---

##### `MatchAnyPrefixInput`<sup>Optional</sup> <a name="MatchAnyPrefixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefixInput"></a>

```go
func MatchAnyPrefixInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnySuffixInput`<sup>Optional</sup> <a name="MatchAnySuffixInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffixInput"></a>

```go
func MatchAnySuffixInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnyTagInput`<sup>Optional</sup> <a name="MatchAnyTagInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyTagInput"></a>

```go
func MatchAnyTagInput() interface{}
```

- *Type:* interface{}

---

##### `MatchObjectAgeInput`<sup>Optional</sup> <a name="MatchObjectAgeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectAgeInput"></a>

```go
func MatchObjectAgeInput() interface{}
```

- *Type:* interface{}

---

##### `MatchObjectSizeInput`<sup>Optional</sup> <a name="MatchObjectSizeInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchObjectSizeInput"></a>

```go
func MatchObjectSizeInput() interface{}
```

- *Type:* interface{}

---

##### `OrInput`<sup>Optional</sup> <a name="OrInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.orInput"></a>

```go
func OrInput() interface{}
```

- *Type:* interface{}

---

##### `MatchAnyPrefix`<sup>Required</sup> <a name="MatchAnyPrefix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnyPrefix"></a>

```go
func MatchAnyPrefix() *[]*string
```

- *Type:* *[]*string

---

##### `MatchAnySuffix`<sup>Required</sup> <a name="MatchAnySuffix" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.matchAnySuffix"></a>

```go
func MatchAnySuffix() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupTagsList <a name="S3StorageLensGroupTagsList" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3StorageLensGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.get"></a>

```go
func Get(index *f64) S3StorageLensGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3StorageLensGroupTagsOutputReference <a name="S3StorageLensGroupTagsOutputReference" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3storagelensgroup"

s3storagelensgroup.NewS3StorageLensGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3StorageLensGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3StorageLensGroup.S3StorageLensGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



