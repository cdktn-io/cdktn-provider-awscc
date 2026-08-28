# `bcmdataexportsExport` Submodule <a name="`bcmdataexportsExport` Submodule" id="@cdktn/provider-awscc.bcmdataexportsExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BcmdataexportsExport <a name="BcmdataexportsExport" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export awscc_bcmdataexports_export}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExport(scope Construct, id *string, config BcmdataexportsExportConfig) BcmdataexportsExport
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig">BcmdataexportsExportConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig">BcmdataexportsExportConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putExport">PutExport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutExport` <a name="PutExport" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putExport"></a>

```go
func PutExport(value BcmdataexportsExportExport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putExport.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BcmdataexportsExport resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.BcmdataexportsExport_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.BcmdataexportsExport_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.BcmdataexportsExport_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.BcmdataexportsExport_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BcmdataexportsExport resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BcmdataexportsExport to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BcmdataexportsExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BcmdataexportsExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.export">Export</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference">BcmdataexportsExportExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.exportArn">ExportArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList">BcmdataexportsExportTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.exportInput">ExportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.export"></a>

```go
func Export() BcmdataexportsExportExportOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference">BcmdataexportsExportExportOutputReference</a>

---

##### `ExportArn`<sup>Required</sup> <a name="ExportArn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.exportArn"></a>

```go
func ExportArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tags"></a>

```go
func Tags() BcmdataexportsExportTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList">BcmdataexportsExportTagsList</a>

---

##### `ExportInput`<sup>Optional</sup> <a name="ExportInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.exportInput"></a>

```go
func ExportInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExport.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BcmdataexportsExportConfig <a name="BcmdataexportsExportConfig" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Export: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bcmdataexportsExport.BcmdataexportsExportExport,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.export">Export</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#export BcmdataexportsExport#export}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Export`<sup>Required</sup> <a name="Export" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.export"></a>

```go
Export BcmdataexportsExportExport
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport">BcmdataexportsExportExport</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#export BcmdataexportsExport#export}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#tags BcmdataexportsExport#tags}.

---

### BcmdataexportsExportExport <a name="BcmdataexportsExportExport" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExport {
	DataQuery: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery,
	DestinationConfigurations: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations,
	Name: *string,
	RefreshCadence: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.dataQuery">DataQuery</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#data_query BcmdataexportsExport#data_query}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.destinationConfigurations">DestinationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#destination_configurations BcmdataexportsExport#destination_configurations}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#name BcmdataexportsExport#name}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.refreshCadence">RefreshCadence</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#refresh_cadence BcmdataexportsExport#refresh_cadence}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#description BcmdataexportsExport#description}. |

---

##### `DataQuery`<sup>Required</sup> <a name="DataQuery" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.dataQuery"></a>

```go
DataQuery BcmdataexportsExportExportDataQuery
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#data_query BcmdataexportsExport#data_query}.

---

##### `DestinationConfigurations`<sup>Required</sup> <a name="DestinationConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.destinationConfigurations"></a>

```go
DestinationConfigurations BcmdataexportsExportExportDestinationConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#destination_configurations BcmdataexportsExport#destination_configurations}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#name BcmdataexportsExport#name}.

---

##### `RefreshCadence`<sup>Required</sup> <a name="RefreshCadence" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.refreshCadence"></a>

```go
RefreshCadence BcmdataexportsExportExportRefreshCadence
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#refresh_cadence BcmdataexportsExport#refresh_cadence}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExport.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#description BcmdataexportsExport#description}.

---

### BcmdataexportsExportExportDataQuery <a name="BcmdataexportsExportExportDataQuery" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExportDataQuery {
	QueryStatement: *string,
	TableConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.queryStatement">QueryStatement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#query_statement BcmdataexportsExport#query_statement}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.tableConfigurations">TableConfigurations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#table_configurations BcmdataexportsExport#table_configurations}. |

---

##### `QueryStatement`<sup>Required</sup> <a name="QueryStatement" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.queryStatement"></a>

```go
QueryStatement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#query_statement BcmdataexportsExport#query_statement}.

---

##### `TableConfigurations`<sup>Optional</sup> <a name="TableConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery.property.tableConfigurations"></a>

```go
TableConfigurations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#table_configurations BcmdataexportsExport#table_configurations}.

---

### BcmdataexportsExportExportDestinationConfigurations <a name="BcmdataexportsExportExportDestinationConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExportDestinationConfigurations {
	S3Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_destination BcmdataexportsExport#s3_destination}. |

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations.property.s3Destination"></a>

```go
S3Destination BcmdataexportsExportExportDestinationConfigurationsS3Destination
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_destination BcmdataexportsExport#s3_destination}.

---

### BcmdataexportsExportExportDestinationConfigurationsS3Destination <a name="BcmdataexportsExportExportDestinationConfigurationsS3Destination" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExportDestinationConfigurationsS3Destination {
	S3Bucket: *string,
	S3OutputConfigurations: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations,
	S3Prefix: *string,
	S3Region: *string,
	S3BucketOwner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_bucket BcmdataexportsExport#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3OutputConfigurations">S3OutputConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_output_configurations BcmdataexportsExport#s3_output_configurations}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Prefix">S3Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_prefix BcmdataexportsExport#s3_prefix}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Region">S3Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_region BcmdataexportsExport#s3_region}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3BucketOwner">S3BucketOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_bucket_owner BcmdataexportsExport#s3_bucket_owner}. |

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Bucket"></a>

```go
S3Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_bucket BcmdataexportsExport#s3_bucket}.

---

##### `S3OutputConfigurations`<sup>Required</sup> <a name="S3OutputConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3OutputConfigurations"></a>

```go
S3OutputConfigurations BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_output_configurations BcmdataexportsExport#s3_output_configurations}.

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Prefix"></a>

```go
S3Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_prefix BcmdataexportsExport#s3_prefix}.

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3Region"></a>

```go
S3Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_region BcmdataexportsExport#s3_region}.

---

##### `S3BucketOwner`<sup>Optional</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination.property.s3BucketOwner"></a>

```go
S3BucketOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#s3_bucket_owner BcmdataexportsExport#s3_bucket_owner}.

---

### BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations {
	Compression: *string,
	Format: *string,
	OutputType: *string,
	Overwrite: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.compression">Compression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#compression BcmdataexportsExport#compression}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#format BcmdataexportsExport#format}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.outputType">OutputType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#output_type BcmdataexportsExport#output_type}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.overwrite">Overwrite</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#overwrite BcmdataexportsExport#overwrite}. |

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.compression"></a>

```go
Compression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#compression BcmdataexportsExport#compression}.

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#format BcmdataexportsExport#format}.

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.outputType"></a>

```go
OutputType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#output_type BcmdataexportsExport#output_type}.

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations.property.overwrite"></a>

```go
Overwrite *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#overwrite BcmdataexportsExport#overwrite}.

---

### BcmdataexportsExportExportRefreshCadence <a name="BcmdataexportsExportExportRefreshCadence" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportExportRefreshCadence {
	Frequency: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.property.frequency">Frequency</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#frequency BcmdataexportsExport#frequency}. |

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence.property.frequency"></a>

```go
Frequency *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#frequency BcmdataexportsExport#frequency}.

---

### BcmdataexportsExportTags <a name="BcmdataexportsExportTags" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

&bcmdataexportsexport.BcmdataexportsExportTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#key BcmdataexportsExport#key}. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#value BcmdataexportsExport#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#key BcmdataexportsExport#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/bcmdataexports_export#value BcmdataexportsExport#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BcmdataexportsExportExportDataQueryOutputReference <a name="BcmdataexportsExportExportDataQueryOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDataQueryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmdataexportsExportExportDataQueryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resetTableConfigurations">ResetTableConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTableConfigurations` <a name="ResetTableConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.resetTableConfigurations"></a>

```go
func ResetTableConfigurations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatementInput">QueryStatementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurationsInput">TableConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatement">QueryStatement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurations">TableConfigurations</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QueryStatementInput`<sup>Optional</sup> <a name="QueryStatementInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatementInput"></a>

```go
func QueryStatementInput() *string
```

- *Type:* *string

---

##### `TableConfigurationsInput`<sup>Optional</sup> <a name="TableConfigurationsInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurationsInput"></a>

```go
func TableConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStatement`<sup>Required</sup> <a name="QueryStatement" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.queryStatement"></a>

```go
func QueryStatement() *string
```

- *Type:* *string

---

##### `TableConfigurations`<sup>Required</sup> <a name="TableConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.tableConfigurations"></a>

```go
func TableConfigurations() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportDestinationConfigurationsOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDestinationConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmdataexportsExportExportDestinationConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination">PutS3Destination</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Destination` <a name="PutS3Destination" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination"></a>

```go
func PutS3Destination(value BcmdataexportsExportExportDestinationConfigurationsS3Destination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.putS3Destination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3Destination">BcmdataexportsExportExportDestinationConfigurationsS3Destination</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3Destination">S3Destination</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference">BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3DestinationInput">S3DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Destination`<sup>Required</sup> <a name="S3Destination" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3Destination"></a>

```go
func S3Destination() BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference">BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference</a>

---

##### `S3DestinationInput`<sup>Optional</sup> <a name="S3DestinationInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.s3DestinationInput"></a>

```go
func S3DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations">PutS3OutputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resetS3BucketOwner">ResetS3BucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3OutputConfigurations` <a name="PutS3OutputConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations"></a>

```go
func PutS3OutputConfigurations(value BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.putS3OutputConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurations</a>

---

##### `ResetS3BucketOwner` <a name="ResetS3BucketOwner" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.resetS3BucketOwner"></a>

```go
func ResetS3BucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurations">S3OutputConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketInput">S3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketOwnerInput">S3BucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurationsInput">S3OutputConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3PrefixInput">S3PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3RegionInput">S3RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Bucket">S3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketOwner">S3BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Prefix">S3Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Region">S3Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3OutputConfigurations`<sup>Required</sup> <a name="S3OutputConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurations"></a>

```go
func S3OutputConfigurations() BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference">BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference</a>

---

##### `S3BucketInput`<sup>Optional</sup> <a name="S3BucketInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketInput"></a>

```go
func S3BucketInput() *string
```

- *Type:* *string

---

##### `S3BucketOwnerInput`<sup>Optional</sup> <a name="S3BucketOwnerInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketOwnerInput"></a>

```go
func S3BucketOwnerInput() *string
```

- *Type:* *string

---

##### `S3OutputConfigurationsInput`<sup>Optional</sup> <a name="S3OutputConfigurationsInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3OutputConfigurationsInput"></a>

```go
func S3OutputConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `S3PrefixInput`<sup>Optional</sup> <a name="S3PrefixInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3PrefixInput"></a>

```go
func S3PrefixInput() *string
```

- *Type:* *string

---

##### `S3RegionInput`<sup>Optional</sup> <a name="S3RegionInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3RegionInput"></a>

```go
func S3RegionInput() *string
```

- *Type:* *string

---

##### `S3Bucket`<sup>Required</sup> <a name="S3Bucket" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Bucket"></a>

```go
func S3Bucket() *string
```

- *Type:* *string

---

##### `S3BucketOwner`<sup>Required</sup> <a name="S3BucketOwner" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3BucketOwner"></a>

```go
func S3BucketOwner() *string
```

- *Type:* *string

---

##### `S3Prefix`<sup>Required</sup> <a name="S3Prefix" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Prefix"></a>

```go
func S3Prefix() *string
```

- *Type:* *string

---

##### `S3Region`<sup>Required</sup> <a name="S3Region" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.s3Region"></a>

```go
func S3Region() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference <a name="BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compressionInput">CompressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputTypeInput">OutputTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwriteInput">OverwriteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compression">Compression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputType">OutputType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwrite">Overwrite</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compressionInput"></a>

```go
func CompressionInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `OutputTypeInput`<sup>Optional</sup> <a name="OutputTypeInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputTypeInput"></a>

```go
func OutputTypeInput() *string
```

- *Type:* *string

---

##### `OverwriteInput`<sup>Optional</sup> <a name="OverwriteInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwriteInput"></a>

```go
func OverwriteInput() *string
```

- *Type:* *string

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.compression"></a>

```go
func Compression() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `OutputType`<sup>Required</sup> <a name="OutputType" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.outputType"></a>

```go
func OutputType() *string
```

- *Type:* *string

---

##### `Overwrite`<sup>Required</sup> <a name="Overwrite" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.overwrite"></a>

```go
func Overwrite() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsS3DestinationS3OutputConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportOutputReference <a name="BcmdataexportsExportExportOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmdataexportsExportExportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery">PutDataQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations">PutDestinationConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence">PutRefreshCadence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDataQuery` <a name="PutDataQuery" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery"></a>

```go
func PutDataQuery(value BcmdataexportsExportExportDataQuery)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDataQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQuery">BcmdataexportsExportExportDataQuery</a>

---

##### `PutDestinationConfigurations` <a name="PutDestinationConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations"></a>

```go
func PutDestinationConfigurations(value BcmdataexportsExportExportDestinationConfigurations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putDestinationConfigurations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurations">BcmdataexportsExportExportDestinationConfigurations</a>

---

##### `PutRefreshCadence` <a name="PutRefreshCadence" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence"></a>

```go
func PutRefreshCadence(value BcmdataexportsExportExportRefreshCadence)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.putRefreshCadence.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadence">BcmdataexportsExportExportRefreshCadence</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQuery">DataQuery</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference">BcmdataexportsExportExportDataQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurations">DestinationConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference">BcmdataexportsExportExportDestinationConfigurationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.exportArn">ExportArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadence">RefreshCadence</a></code> | <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference">BcmdataexportsExportExportRefreshCadenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQueryInput">DataQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurationsInput">DestinationConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadenceInput">RefreshCadenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataQuery`<sup>Required</sup> <a name="DataQuery" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQuery"></a>

```go
func DataQuery() BcmdataexportsExportExportDataQueryOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDataQueryOutputReference">BcmdataexportsExportExportDataQueryOutputReference</a>

---

##### `DestinationConfigurations`<sup>Required</sup> <a name="DestinationConfigurations" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurations"></a>

```go
func DestinationConfigurations() BcmdataexportsExportExportDestinationConfigurationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportDestinationConfigurationsOutputReference">BcmdataexportsExportExportDestinationConfigurationsOutputReference</a>

---

##### `ExportArn`<sup>Required</sup> <a name="ExportArn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.exportArn"></a>

```go
func ExportArn() *string
```

- *Type:* *string

---

##### `RefreshCadence`<sup>Required</sup> <a name="RefreshCadence" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadence"></a>

```go
func RefreshCadence() BcmdataexportsExportExportRefreshCadenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference">BcmdataexportsExportExportRefreshCadenceOutputReference</a>

---

##### `DataQueryInput`<sup>Optional</sup> <a name="DataQueryInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.dataQueryInput"></a>

```go
func DataQueryInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationConfigurationsInput`<sup>Optional</sup> <a name="DestinationConfigurationsInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.destinationConfigurationsInput"></a>

```go
func DestinationConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RefreshCadenceInput`<sup>Optional</sup> <a name="RefreshCadenceInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.refreshCadenceInput"></a>

```go
func RefreshCadenceInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportExportRefreshCadenceOutputReference <a name="BcmdataexportsExportExportRefreshCadenceOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportExportRefreshCadenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BcmdataexportsExportExportRefreshCadenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequency">Frequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequencyInput"></a>

```go
func FrequencyInput() *string
```

- *Type:* *string

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.frequency"></a>

```go
func Frequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportExportRefreshCadenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportTagsList <a name="BcmdataexportsExportTagsList" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BcmdataexportsExportTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.get"></a>

```go
func Get(index *f64) BcmdataexportsExportTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BcmdataexportsExportTagsOutputReference <a name="BcmdataexportsExportTagsOutputReference" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bcmdataexportsexport"

bcmdataexportsexport.NewBcmdataexportsExportTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BcmdataexportsExportTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bcmdataexportsExport.BcmdataexportsExportTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



