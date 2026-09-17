# `storagegatewayTape` Submodule <a name="`storagegatewayTape` Submodule" id="@cdktn/provider-awscc.storagegatewayTape"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StoragegatewayTape <a name="StoragegatewayTape" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape awscc_storagegateway_tape}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/storagegatewaytape"

storagegatewaytape.NewStoragegatewayTape(scope Construct, id *string, config StoragegatewayTapeConfig) StoragegatewayTape
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig">StoragegatewayTapeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig">StoragegatewayTapeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsEncrypted">ResetKmsEncrypted</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetPoolId">ResetPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTapeBarcode">ResetTapeBarcode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetWorm">ResetWorm</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetKmsEncrypted` <a name="ResetKmsEncrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsEncrypted"></a>

```go
func ResetKmsEncrypted()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetPoolId` <a name="ResetPoolId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetPoolId"></a>

```go
func ResetPoolId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTapeBarcode` <a name="ResetTapeBarcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetTapeBarcode"></a>

```go
func ResetTapeBarcode()
```

##### `ResetWorm` <a name="ResetWorm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.resetWorm"></a>

```go
func ResetWorm()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StoragegatewayTape resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/storagegatewaytape"

storagegatewaytape.StoragegatewayTape_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/storagegatewaytape"

storagegatewaytape.StoragegatewayTape_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/storagegatewaytape"

storagegatewaytape.StoragegatewayTape_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/storagegatewaytape"

storagegatewaytape.StoragegatewayTape_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StoragegatewayTape resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StoragegatewayTape to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StoragegatewayTape that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StoragegatewayTape to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList">StoragegatewayTapeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeArn">TapeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeCreatedDate">TapeCreatedDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeStatus">TapeStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeUsedInBytes">TapeUsedInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArnInput">GatewayArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncryptedInput">KmsEncryptedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolIdInput">PoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcodeInput">TapeBarcodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytesInput">TapeSizeInBytesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.wormInput">WormInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncrypted">KmsEncrypted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolId">PoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcode">TapeBarcode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytes">TapeSizeInBytes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.worm">Worm</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tags"></a>

```go
func Tags() StoragegatewayTapeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList">StoragegatewayTapeTagsList</a>

---

##### `TapeArn`<sup>Required</sup> <a name="TapeArn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeArn"></a>

```go
func TapeArn() *string
```

- *Type:* *string

---

##### `TapeCreatedDate`<sup>Required</sup> <a name="TapeCreatedDate" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeCreatedDate"></a>

```go
func TapeCreatedDate() *string
```

- *Type:* *string

---

##### `TapeStatus`<sup>Required</sup> <a name="TapeStatus" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeStatus"></a>

```go
func TapeStatus() *string
```

- *Type:* *string

---

##### `TapeUsedInBytes`<sup>Required</sup> <a name="TapeUsedInBytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeUsedInBytes"></a>

```go
func TapeUsedInBytes() *f64
```

- *Type:* *f64

---

##### `GatewayArnInput`<sup>Optional</sup> <a name="GatewayArnInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArnInput"></a>

```go
func GatewayArnInput() *string
```

- *Type:* *string

---

##### `KmsEncryptedInput`<sup>Optional</sup> <a name="KmsEncryptedInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncryptedInput"></a>

```go
func KmsEncryptedInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolIdInput"></a>

```go
func PoolIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TapeBarcodeInput`<sup>Optional</sup> <a name="TapeBarcodeInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcodeInput"></a>

```go
func TapeBarcodeInput() *string
```

- *Type:* *string

---

##### `TapeSizeInBytesInput`<sup>Optional</sup> <a name="TapeSizeInBytesInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytesInput"></a>

```go
func TapeSizeInBytesInput() *f64
```

- *Type:* *f64

---

##### `WormInput`<sup>Optional</sup> <a name="WormInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.wormInput"></a>

```go
func WormInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.gatewayArn"></a>

```go
func GatewayArn() *string
```

- *Type:* *string

---

##### `KmsEncrypted`<sup>Required</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsEncrypted"></a>

```go
func KmsEncrypted() interface{}
```

- *Type:* interface{}

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.poolId"></a>

```go
func PoolId() *string
```

- *Type:* *string

---

##### `TapeBarcode`<sup>Required</sup> <a name="TapeBarcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeBarcode"></a>

```go
func TapeBarcode() *string
```

- *Type:* *string

---

##### `TapeSizeInBytes`<sup>Required</sup> <a name="TapeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tapeSizeInBytes"></a>

```go
func TapeSizeInBytes() *f64
```

- *Type:* *f64

---

##### `Worm`<sup>Required</sup> <a name="Worm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.worm"></a>

```go
func Worm() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTape.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StoragegatewayTapeConfig <a name="StoragegatewayTapeConfig" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/storagegatewaytape"

&storagegatewaytape.StoragegatewayTapeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayArn: *string,
	TapeSizeInBytes: *f64,
	KmsEncrypted: interface{},
	KmsKey: *string,
	PoolId: *string,
	Tags: interface{},
	TapeBarcode: *string,
	Worm: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeSizeInBytes">TapeSizeInBytes</a></code> | <code>*f64</code> | The size, in bytes, of the virtual tape that you want to create. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsEncrypted">KmsEncrypted</a></code> | <code>interface{}</code> | Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.poolId">PoolId</a></code> | <code>*string</code> | The ID of the pool that you want to add your tape to for archiving. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of up to 50 tags to assign to the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeBarcode">TapeBarcode</a></code> | <code>*string</code> | The barcode that you want to assign to the virtual tape. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.worm">Worm</a></code> | <code>interface{}</code> | Set to true to create a write-once-read-many (WORM) virtual tape. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.gatewayArn"></a>

```go
GatewayArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#gateway_arn StoragegatewayTape#gateway_arn}

---

##### `TapeSizeInBytes`<sup>Required</sup> <a name="TapeSizeInBytes" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeSizeInBytes"></a>

```go
TapeSizeInBytes *f64
```

- *Type:* *f64

The size, in bytes, of the virtual tape that you want to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#tape_size_in_bytes StoragegatewayTape#tape_size_in_bytes}

---

##### `KmsEncrypted`<sup>Optional</sup> <a name="KmsEncrypted" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsEncrypted"></a>

```go
KmsEncrypted interface{}
```

- *Type:* interface{}

Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.

Optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#kms_encrypted StoragegatewayTape#kms_encrypted}

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.

This value must be set if KMSEncrypted is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#kms_key StoragegatewayTape#kms_key}

---

##### `PoolId`<sup>Optional</sup> <a name="PoolId" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.poolId"></a>

```go
PoolId *string
```

- *Type:* *string

The ID of the pool that you want to add your tape to for archiving.

Tapes in this pool are archived in the S3 storage class that is associated with the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#pool_id StoragegatewayTape#pool_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of up to 50 tags to assign to the virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#tags StoragegatewayTape#tags}

---

##### `TapeBarcode`<sup>Optional</sup> <a name="TapeBarcode" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.tapeBarcode"></a>

```go
TapeBarcode *string
```

- *Type:* *string

The barcode that you want to assign to the virtual tape.

Barcodes cannot be reused, even after a tape is deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#tape_barcode StoragegatewayTape#tape_barcode}

---

##### `Worm`<sup>Optional</sup> <a name="Worm" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeConfig.property.worm"></a>

```go
Worm interface{}
```

- *Type:* interface{}

Set to true to create a write-once-read-many (WORM) virtual tape.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#worm StoragegatewayTape#worm}

---

### StoragegatewayTapeTags <a name="StoragegatewayTapeTags" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/storagegatewaytape"

&storagegatewaytape.StoragegatewayTapeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.key">Key</a></code> | <code>*string</code> | The tag key. Cannot be prefixed with aws:. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.value">Value</a></code> | <code>*string</code> | The tag value. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The tag key. Cannot be prefixed with aws:.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#key StoragegatewayTape#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.102.0/docs/resources/storagegateway_tape#value StoragegatewayTape#value}

---

## Classes <a name="Classes" id="Classes"></a>

### StoragegatewayTapeTagsList <a name="StoragegatewayTapeTagsList" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/storagegatewaytape"

storagegatewaytape.NewStoragegatewayTapeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StoragegatewayTapeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get"></a>

```go
func Get(index *f64) StoragegatewayTapeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StoragegatewayTapeTagsOutputReference <a name="StoragegatewayTapeTagsOutputReference" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/storagegatewaytape"

storagegatewaytape.NewStoragegatewayTapeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StoragegatewayTapeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.storagegatewayTape.StoragegatewayTapeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



