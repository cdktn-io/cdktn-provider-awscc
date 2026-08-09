# `omicsSequenceStore` Submodule <a name="`omicsSequenceStore` Submodule" id="@cdktn/provider-awscc.omicsSequenceStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OmicsSequenceStore <a name="OmicsSequenceStore" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store awscc_omics_sequence_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicssequencestore"

omicssequencestore.NewOmicsSequenceStore(scope Construct, id *string, config OmicsSequenceStoreConfig) OmicsSequenceStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig">OmicsSequenceStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig">OmicsSequenceStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig">PutSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetAccessLogLocation">ResetAccessLogLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetETagAlgorithmFamily">ResetETagAlgorithmFamily</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetFallbackLocation">ResetFallbackLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetPropagatedSetLevelTags">ResetPropagatedSetLevelTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetS3AccessPolicy">ResetS3AccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetSseConfig">ResetSseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSseConfig` <a name="PutSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig"></a>

```go
func PutSseConfig(value OmicsSequenceStoreSseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.putSseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

---

##### `ResetAccessLogLocation` <a name="ResetAccessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetAccessLogLocation"></a>

```go
func ResetAccessLogLocation()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetETagAlgorithmFamily` <a name="ResetETagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetETagAlgorithmFamily"></a>

```go
func ResetETagAlgorithmFamily()
```

##### `ResetFallbackLocation` <a name="ResetFallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetFallbackLocation"></a>

```go
func ResetFallbackLocation()
```

##### `ResetPropagatedSetLevelTags` <a name="ResetPropagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetPropagatedSetLevelTags"></a>

```go
func ResetPropagatedSetLevelTags()
```

##### `ResetS3AccessPolicy` <a name="ResetS3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetS3AccessPolicy"></a>

```go
func ResetS3AccessPolicy()
```

##### `ResetSseConfig` <a name="ResetSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetSseConfig"></a>

```go
func ResetSseConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a OmicsSequenceStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicssequencestore"

omicssequencestore.OmicsSequenceStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicssequencestore"

omicssequencestore.OmicsSequenceStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicssequencestore"

omicssequencestore.OmicsSequenceStore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicssequencestore"

omicssequencestore.OmicsSequenceStore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a OmicsSequenceStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OmicsSequenceStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OmicsSequenceStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the OmicsSequenceStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPointArn">S3AccessPointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sequenceStoreId">SequenceStoreId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfig">SseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference">OmicsSequenceStoreSseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.statusMessage">StatusMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocationInput">AccessLogLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamilyInput">ETagAlgorithmFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocationInput">FallbackLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTagsInput">PropagatedSetLevelTagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicyInput">S3AccessPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfigInput">SseConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocation">AccessLogLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamily">ETagAlgorithmFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocation">FallbackLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTags">PropagatedSetLevelTags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicy">S3AccessPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `S3AccessPointArn`<sup>Required</sup> <a name="S3AccessPointArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPointArn"></a>

```go
func S3AccessPointArn() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `SequenceStoreId`<sup>Required</sup> <a name="SequenceStoreId" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sequenceStoreId"></a>

```go
func SequenceStoreId() *string
```

- *Type:* *string

---

##### `SseConfig`<sup>Required</sup> <a name="SseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfig"></a>

```go
func SseConfig() OmicsSequenceStoreSseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference">OmicsSequenceStoreSseConfigOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusMessage`<sup>Required</sup> <a name="StatusMessage" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.statusMessage"></a>

```go
func StatusMessage() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AccessLogLocationInput`<sup>Optional</sup> <a name="AccessLogLocationInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocationInput"></a>

```go
func AccessLogLocationInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ETagAlgorithmFamilyInput`<sup>Optional</sup> <a name="ETagAlgorithmFamilyInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamilyInput"></a>

```go
func ETagAlgorithmFamilyInput() *string
```

- *Type:* *string

---

##### `FallbackLocationInput`<sup>Optional</sup> <a name="FallbackLocationInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocationInput"></a>

```go
func FallbackLocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PropagatedSetLevelTagsInput`<sup>Optional</sup> <a name="PropagatedSetLevelTagsInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTagsInput"></a>

```go
func PropagatedSetLevelTagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `S3AccessPolicyInput`<sup>Optional</sup> <a name="S3AccessPolicyInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicyInput"></a>

```go
func S3AccessPolicyInput() *string
```

- *Type:* *string

---

##### `SseConfigInput`<sup>Optional</sup> <a name="SseConfigInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.sseConfigInput"></a>

```go
func SseConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AccessLogLocation`<sup>Required</sup> <a name="AccessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.accessLogLocation"></a>

```go
func AccessLogLocation() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ETagAlgorithmFamily`<sup>Required</sup> <a name="ETagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.eTagAlgorithmFamily"></a>

```go
func ETagAlgorithmFamily() *string
```

- *Type:* *string

---

##### `FallbackLocation`<sup>Required</sup> <a name="FallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.fallbackLocation"></a>

```go
func FallbackLocation() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PropagatedSetLevelTags`<sup>Required</sup> <a name="PropagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.propagatedSetLevelTags"></a>

```go
func PropagatedSetLevelTags() *[]*string
```

- *Type:* *[]*string

---

##### `S3AccessPolicy`<sup>Required</sup> <a name="S3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.s3AccessPolicy"></a>

```go
func S3AccessPolicy() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OmicsSequenceStoreConfig <a name="OmicsSequenceStoreConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicssequencestore"

&omicssequencestore.OmicsSequenceStoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AccessLogLocation: *string,
	Description: *string,
	ETagAlgorithmFamily: *string,
	FallbackLocation: *string,
	PropagatedSetLevelTags: *[]*string,
	S3AccessPolicy: *string,
	SseConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.name">Name</a></code> | <code>*string</code> | A name for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.accessLogLocation">AccessLogLocation</a></code> | <code>*string</code> | Location of the access logs. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.description">Description</a></code> | <code>*string</code> | A description for the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.eTagAlgorithmFamily">ETagAlgorithmFamily</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.fallbackLocation">FallbackLocation</a></code> | <code>*string</code> | An S3 location that is used to store files that have failed a direct upload. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.propagatedSetLevelTags">PropagatedSetLevelTags</a></code> | <code>*[]*string</code> | The tags keys to propagate to the S3 objects associated with read sets in the sequence store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.s3AccessPolicy">S3AccessPolicy</a></code> | <code>*string</code> | The resource policy that controls S3 access on the store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.sseConfig">SseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a></code> | Server-side encryption (SSE) settings for a store. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#name OmicsSequenceStore#name}

---

##### `AccessLogLocation`<sup>Optional</sup> <a name="AccessLogLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.accessLogLocation"></a>

```go
AccessLogLocation *string
```

- *Type:* *string

Location of the access logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#access_log_location OmicsSequenceStore#access_log_location}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#description OmicsSequenceStore#description}

---

##### `ETagAlgorithmFamily`<sup>Optional</sup> <a name="ETagAlgorithmFamily" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.eTagAlgorithmFamily"></a>

```go
ETagAlgorithmFamily *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#e_tag_algorithm_family OmicsSequenceStore#e_tag_algorithm_family}.

---

##### `FallbackLocation`<sup>Optional</sup> <a name="FallbackLocation" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.fallbackLocation"></a>

```go
FallbackLocation *string
```

- *Type:* *string

An S3 location that is used to store files that have failed a direct upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#fallback_location OmicsSequenceStore#fallback_location}

---

##### `PropagatedSetLevelTags`<sup>Optional</sup> <a name="PropagatedSetLevelTags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.propagatedSetLevelTags"></a>

```go
PropagatedSetLevelTags *[]*string
```

- *Type:* *[]*string

The tags keys to propagate to the S3 objects associated with read sets in the sequence store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#propagated_set_level_tags OmicsSequenceStore#propagated_set_level_tags}

---

##### `S3AccessPolicy`<sup>Optional</sup> <a name="S3AccessPolicy" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.s3AccessPolicy"></a>

```go
S3AccessPolicy *string
```

- *Type:* *string

The resource policy that controls S3 access on the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#s3_access_policy OmicsSequenceStore#s3_access_policy}

---

##### `SseConfig`<sup>Optional</sup> <a name="SseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.sseConfig"></a>

```go
SseConfig OmicsSequenceStoreSseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig">OmicsSequenceStoreSseConfig</a>

Server-side encryption (SSE) settings for a store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#sse_config OmicsSequenceStore#sse_config}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#tags OmicsSequenceStore#tags}.

---

### OmicsSequenceStoreSseConfig <a name="OmicsSequenceStoreSseConfig" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicssequencestore"

&omicssequencestore.OmicsSequenceStoreSseConfig {
	KeyArn: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.keyArn">KeyArn</a></code> | <code>*string</code> | An encryption key ARN. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#type OmicsSequenceStore#type}. |

---

##### `KeyArn`<sup>Optional</sup> <a name="KeyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.keyArn"></a>

```go
KeyArn *string
```

- *Type:* *string

An encryption key ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#key_arn OmicsSequenceStore#key_arn}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/omics_sequence_store#type OmicsSequenceStore#type}.

---

## Classes <a name="Classes" id="Classes"></a>

### OmicsSequenceStoreSseConfigOutputReference <a name="OmicsSequenceStoreSseConfigOutputReference" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/omicssequencestore"

omicssequencestore.NewOmicsSequenceStoreSseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OmicsSequenceStoreSseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetKeyArn">ResetKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyArn` <a name="ResetKeyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetKeyArn"></a>

```go
func ResetKeyArn()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArnInput">KeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArn">KeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyArnInput`<sup>Optional</sup> <a name="KeyArnInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArnInput"></a>

```go
func KeyArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `KeyArn`<sup>Required</sup> <a name="KeyArn" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.keyArn"></a>

```go
func KeyArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.omicsSequenceStore.OmicsSequenceStoreSseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



