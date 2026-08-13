# `omicsAnnotationStore` Submodule <a name="`omicsAnnotationStore` Submodule" id="@cdktn/provider-awscc.omicsAnnotationStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsAnnotationStore <a name="OmicsAnnotationStore" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store awscc_omics_annotation_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

omicsannotationstore.NewOmicsAnnotationStore(scope Construct, id *string, config OmicsAnnotationStoreConfig) OmicsAnnotationStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig">OmicsAnnotationStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig">OmicsAnnotationStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference">PutReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig">PutSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions">PutStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetReference">ResetReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetSseConfig">ResetSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetStoreOptions">ResetStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReference` <a name="PutReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference"></a>

```go
func PutReference(value OmicsAnnotationStoreReference)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

---

##### `PutSseConfig` <a name="PutSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig"></a>

```go
func PutSseConfig(value OmicsAnnotationStoreSseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putSseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

---

##### `PutStoreOptions` <a name="PutStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions"></a>

```go
func PutStoreOptions(value OmicsAnnotationStoreStoreOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.putStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetReference` <a name="ResetReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetReference"></a>

```go
func ResetReference()
```

##### `ResetSseConfig` <a name="ResetSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetSseConfig"></a>

```go
func ResetSseConfig()
```

##### `ResetStoreOptions` <a name="ResetStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetStoreOptions"></a>

```go
func ResetStoreOptions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsAnnotationStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

omicsannotationstore.OmicsAnnotationStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

omicsannotationstore.OmicsAnnotationStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

omicsannotationstore.OmicsAnnotationStore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

omicsannotationstore.OmicsAnnotationStore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OmicsAnnotationStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OmicsAnnotationStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OmicsAnnotationStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OmicsAnnotationStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.annotationStoreId">AnnotationStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.reference">Reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference">OmicsAnnotationStoreReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfig">SseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference">OmicsAnnotationStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeArn">StoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptions">StoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeSizeBytes">StoreSizeBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.referenceInput">ReferenceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfigInput">SseConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormatInput">StoreFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptionsInput">StoreOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormat">StoreFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnnotationStoreId`<sup>Required</sup> <a name="AnnotationStoreId" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.annotationStoreId"></a>

```go
func AnnotationStoreId() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Reference`<sup>Required</sup> <a name="Reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.reference"></a>

```go
func Reference() OmicsAnnotationStoreReferenceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference">OmicsAnnotationStoreReferenceOutputReference</a>

---

##### `SseConfig`<sup>Required</sup> <a name="SseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfig"></a>

```go
func SseConfig() OmicsAnnotationStoreSseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference">OmicsAnnotationStoreSseConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `StoreArn`<sup>Required</sup> <a name="StoreArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeArn"></a>

```go
func StoreArn() *string
```

- *Type:* *string

---

##### `StoreOptions`<sup>Required</sup> <a name="StoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptions"></a>

```go
func StoreOptions() OmicsAnnotationStoreStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsOutputReference</a>

---

##### `StoreSizeBytes`<sup>Required</sup> <a name="StoreSizeBytes" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeSizeBytes"></a>

```go
func StoreSizeBytes() *f64
```

- *Type:* *f64

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ReferenceInput`<sup>Optional</sup> <a name="ReferenceInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.referenceInput"></a>

```go
func ReferenceInput() interface{}
```

- *Type:* interface{}

---

##### `SseConfigInput`<sup>Optional</sup> <a name="SseConfigInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.sseConfigInput"></a>

```go
func SseConfigInput() interface{}
```

- *Type:* interface{}

---

##### `StoreFormatInput`<sup>Optional</sup> <a name="StoreFormatInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormatInput"></a>

```go
func StoreFormatInput() *string
```

- *Type:* *string

---

##### `StoreOptionsInput`<sup>Optional</sup> <a name="StoreOptionsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeOptionsInput"></a>

```go
func StoreOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StoreFormat`<sup>Required</sup> <a name="StoreFormat" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.storeFormat"></a>

```go
func StoreFormat() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsAnnotationStoreConfig <a name="OmicsAnnotationStoreConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

&omicsannotationstore.OmicsAnnotationStoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	StoreFormat: *string,
	Description: *string,
	Reference: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.omicsAnnotationStore.OmicsAnnotationStoreReference,
	SseConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig,
	StoreOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeFormat">StoreFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.reference">Reference</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.sseConfig">SseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeOptions">StoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#name OmicsAnnotationStore#name}.

---

##### `StoreFormat`<sup>Required</sup> <a name="StoreFormat" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeFormat"></a>

```go
StoreFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#store_format OmicsAnnotationStore#store_format}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#description OmicsAnnotationStore#description}.

---

##### `Reference`<sup>Optional</sup> <a name="Reference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.reference"></a>

```go
Reference OmicsAnnotationStoreReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference">OmicsAnnotationStoreReference</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#reference OmicsAnnotationStore#reference}.

---

##### `SseConfig`<sup>Optional</sup> <a name="SseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.sseConfig"></a>

```go
SseConfig OmicsAnnotationStoreSseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig">OmicsAnnotationStoreSseConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#sse_config OmicsAnnotationStore#sse_config}.

---

##### `StoreOptions`<sup>Optional</sup> <a name="StoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.storeOptions"></a>

```go
StoreOptions OmicsAnnotationStoreStoreOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions">OmicsAnnotationStoreStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#store_options OmicsAnnotationStore#store_options}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#tags OmicsAnnotationStore#tags}.

---

### OmicsAnnotationStoreReference <a name="OmicsAnnotationStoreReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

&omicsannotationstore.OmicsAnnotationStoreReference {
	ReferenceArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.property.referenceArn">ReferenceArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#reference_arn OmicsAnnotationStore#reference_arn}. |

---

##### `ReferenceArn`<sup>Optional</sup> <a name="ReferenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReference.property.referenceArn"></a>

```go
ReferenceArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#reference_arn OmicsAnnotationStore#reference_arn}.

---

### OmicsAnnotationStoreSseConfig <a name="OmicsAnnotationStoreSseConfig" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

&omicsannotationstore.OmicsAnnotationStoreSseConfig {
	KeyArn: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.keyArn">KeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#key_arn OmicsAnnotationStore#key_arn}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#type OmicsAnnotationStore#type}. |

---

##### `KeyArn`<sup>Optional</sup> <a name="KeyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.keyArn"></a>

```go
KeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#key_arn OmicsAnnotationStore#key_arn}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#type OmicsAnnotationStore#type}.

---

### OmicsAnnotationStoreStoreOptions <a name="OmicsAnnotationStoreStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

&omicsannotationstore.OmicsAnnotationStoreStoreOptions {
	TsvStoreOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.property.tsvStoreOptions">TsvStoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#tsv_store_options OmicsAnnotationStore#tsv_store_options}. |

---

##### `TsvStoreOptions`<sup>Optional</sup> <a name="TsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptions.property.tsvStoreOptions"></a>

```go
TsvStoreOptions OmicsAnnotationStoreStoreOptionsTsvStoreOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#tsv_store_options OmicsAnnotationStore#tsv_store_options}.

---

### OmicsAnnotationStoreStoreOptionsTsvStoreOptions <a name="OmicsAnnotationStoreStoreOptionsTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

&omicsannotationstore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions {
	AnnotationType: *string,
	FormatToHeader: *map[string]*string,
	Schema: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.annotationType">AnnotationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#annotation_type OmicsAnnotationStore#annotation_type}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.formatToHeader">FormatToHeader</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#format_to_header OmicsAnnotationStore#format_to_header}. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.schema">Schema</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#schema OmicsAnnotationStore#schema}. |

---

##### `AnnotationType`<sup>Optional</sup> <a name="AnnotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.annotationType"></a>

```go
AnnotationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#annotation_type OmicsAnnotationStore#annotation_type}.

---

##### `FormatToHeader`<sup>Optional</sup> <a name="FormatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.formatToHeader"></a>

```go
FormatToHeader *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#format_to_header OmicsAnnotationStore#format_to_header}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions.property.schema"></a>

```go
Schema interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/omics_annotation_store#schema OmicsAnnotationStore#schema}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsAnnotationStoreReferenceOutputReference <a name="OmicsAnnotationStoreReferenceOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

omicsannotationstore.NewOmicsAnnotationStoreReferenceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OmicsAnnotationStoreReferenceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resetReferenceArn">ResetReferenceArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReferenceArn` <a name="ResetReferenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.resetReferenceArn"></a>

```go
func ResetReferenceArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArnInput">ReferenceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArn">ReferenceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferenceArnInput`<sup>Optional</sup> <a name="ReferenceArnInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArnInput"></a>

```go
func ReferenceArnInput() *string
```

- *Type:* *string

---

##### `ReferenceArn`<sup>Required</sup> <a name="ReferenceArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.referenceArn"></a>

```go
func ReferenceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreReferenceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OmicsAnnotationStoreSseConfigOutputReference <a name="OmicsAnnotationStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

omicsannotationstore.NewOmicsAnnotationStoreSseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OmicsAnnotationStoreSseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetKeyArn">ResetKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyArn` <a name="ResetKeyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetKeyArn"></a>

```go
func ResetKeyArn()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArnInput">KeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArn">KeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyArnInput`<sup>Optional</sup> <a name="KeyArnInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArnInput"></a>

```go
func KeyArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.keyArn"></a>

```go
func KeyArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreSseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OmicsAnnotationStoreStoreOptionsOutputReference <a name="OmicsAnnotationStoreStoreOptionsOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

omicsannotationstore.NewOmicsAnnotationStoreStoreOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OmicsAnnotationStoreStoreOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions">PutTsvStoreOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resetTsvStoreOptions">ResetTsvStoreOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTsvStoreOptions` <a name="PutTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions"></a>

```go
func PutTsvStoreOptions(value OmicsAnnotationStoreStoreOptionsTsvStoreOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.putTsvStoreOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptions">OmicsAnnotationStoreStoreOptionsTsvStoreOptions</a>

---

##### `ResetTsvStoreOptions` <a name="ResetTsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.resetTsvStoreOptions"></a>

```go
func ResetTsvStoreOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions">TsvStoreOptions</a></code> | <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptionsInput">TsvStoreOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TsvStoreOptions`<sup>Required</sup> <a name="TsvStoreOptions" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptions"></a>

```go
func TsvStoreOptions() OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference">OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference</a>

---

##### `TsvStoreOptionsInput`<sup>Optional</sup> <a name="TsvStoreOptionsInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.tsvStoreOptionsInput"></a>

```go
func TsvStoreOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference <a name="OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicsannotationstore"

omicsannotationstore.NewOmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetAnnotationType">ResetAnnotationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetFormatToHeader">ResetFormatToHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotationType` <a name="ResetAnnotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetAnnotationType"></a>

```go
func ResetAnnotationType()
```

##### `ResetFormatToHeader` <a name="ResetFormatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetFormatToHeader"></a>

```go
func ResetFormatToHeader()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.resetSchema"></a>

```go
func ResetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationTypeInput">AnnotationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeaderInput">FormatToHeaderInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schemaInput">SchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType">AnnotationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader">FormatToHeader</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema">Schema</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnnotationTypeInput`<sup>Optional</sup> <a name="AnnotationTypeInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationTypeInput"></a>

```go
func AnnotationTypeInput() *string
```

- *Type:* *string

---

##### `FormatToHeaderInput`<sup>Optional</sup> <a name="FormatToHeaderInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeaderInput"></a>

```go
func FormatToHeaderInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schemaInput"></a>

```go
func SchemaInput() interface{}
```

- *Type:* interface{}

---

##### `AnnotationType`<sup>Required</sup> <a name="AnnotationType" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.annotationType"></a>

```go
func AnnotationType() *string
```

- *Type:* *string

---

##### `FormatToHeader`<sup>Required</sup> <a name="FormatToHeader" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.formatToHeader"></a>

```go
func FormatToHeader() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.schema"></a>

```go
func Schema() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsAnnotationStore.OmicsAnnotationStoreStoreOptionsTsvStoreOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



