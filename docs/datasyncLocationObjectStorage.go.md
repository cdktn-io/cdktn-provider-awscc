# `datasyncLocationObjectStorage` Submodule <a name="`datasyncLocationObjectStorage` Submodule" id="@cdktn/provider-awscc.datasyncLocationObjectStorage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatasyncLocationObjectStorage <a name="DatasyncLocationObjectStorage" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage awscc_datasync_location_object_storage}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

datasynclocationobjectstorage.NewDatasyncLocationObjectStorage(scope Construct, id *string, config DatasyncLocationObjectStorageConfig) DatasyncLocationObjectStorage
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig">DatasyncLocationObjectStorageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig">DatasyncLocationObjectStorageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig">PutCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig">PutCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAgentArns">ResetAgentArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCmkSecretConfig">ResetCmkSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCustomSecretConfig">ResetCustomSecretConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerCertificate">ResetServerCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerHostname">ResetServerHostname</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerPort">ResetServerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerProtocol">ResetServerProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSubdirectory">ResetSubdirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCmkSecretConfig` <a name="PutCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig"></a>

```go
func PutCmkSecretConfig(value DatasyncLocationObjectStorageCmkSecretConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCmkSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

---

##### `PutCustomSecretConfig` <a name="PutCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig"></a>

```go
func PutCustomSecretConfig(value DatasyncLocationObjectStorageCustomSecretConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putCustomSecretConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAccessKey"></a>

```go
func ResetAccessKey()
```

##### `ResetAgentArns` <a name="ResetAgentArns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetAgentArns"></a>

```go
func ResetAgentArns()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetCmkSecretConfig` <a name="ResetCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCmkSecretConfig"></a>

```go
func ResetCmkSecretConfig()
```

##### `ResetCustomSecretConfig` <a name="ResetCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetCustomSecretConfig"></a>

```go
func ResetCustomSecretConfig()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSecretKey"></a>

```go
func ResetSecretKey()
```

##### `ResetServerCertificate` <a name="ResetServerCertificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerCertificate"></a>

```go
func ResetServerCertificate()
```

##### `ResetServerHostname` <a name="ResetServerHostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerHostname"></a>

```go
func ResetServerHostname()
```

##### `ResetServerPort` <a name="ResetServerPort" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerPort"></a>

```go
func ResetServerPort()
```

##### `ResetServerProtocol` <a name="ResetServerProtocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetServerProtocol"></a>

```go
func ResetServerProtocol()
```

##### `ResetSubdirectory` <a name="ResetSubdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetSubdirectory"></a>

```go
func ResetSubdirectory()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DatasyncLocationObjectStorage resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

datasynclocationobjectstorage.DatasyncLocationObjectStorage_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

datasynclocationobjectstorage.DatasyncLocationObjectStorage_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

datasynclocationobjectstorage.DatasyncLocationObjectStorage_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

datasynclocationobjectstorage.DatasyncLocationObjectStorage_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DatasyncLocationObjectStorage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DatasyncLocationObjectStorage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DatasyncLocationObjectStorage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DatasyncLocationObjectStorage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfig">CmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference">DatasyncLocationObjectStorageCmkSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfig">CustomSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference">DatasyncLocationObjectStorageCustomSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationArn">LocationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationUri">LocationUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.managedSecretConfig">ManagedSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference">DatasyncLocationObjectStorageManagedSecretConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList">DatasyncLocationObjectStorageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKeyInput">AccessKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArnsInput">AgentArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfigInput">CmkSecretConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfigInput">CustomSecretConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKeyInput">SecretKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificateInput">ServerCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostnameInput">ServerHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPortInput">ServerPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocolInput">ServerProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectoryInput">SubdirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKey">AccessKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArns">AgentArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKey">SecretKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificate">ServerCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostname">ServerHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPort">ServerPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocol">ServerProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CmkSecretConfig`<sup>Required</sup> <a name="CmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfig"></a>

```go
func CmkSecretConfig() DatasyncLocationObjectStorageCmkSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference">DatasyncLocationObjectStorageCmkSecretConfigOutputReference</a>

---

##### `CustomSecretConfig`<sup>Required</sup> <a name="CustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfig"></a>

```go
func CustomSecretConfig() DatasyncLocationObjectStorageCustomSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference">DatasyncLocationObjectStorageCustomSecretConfigOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocationArn`<sup>Required</sup> <a name="LocationArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationArn"></a>

```go
func LocationArn() *string
```

- *Type:* *string

---

##### `LocationUri`<sup>Required</sup> <a name="LocationUri" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.locationUri"></a>

```go
func LocationUri() *string
```

- *Type:* *string

---

##### `ManagedSecretConfig`<sup>Required</sup> <a name="ManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.managedSecretConfig"></a>

```go
func ManagedSecretConfig() DatasyncLocationObjectStorageManagedSecretConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference">DatasyncLocationObjectStorageManagedSecretConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tags"></a>

```go
func Tags() DatasyncLocationObjectStorageTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList">DatasyncLocationObjectStorageTagsList</a>

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKeyInput"></a>

```go
func AccessKeyInput() *string
```

- *Type:* *string

---

##### `AgentArnsInput`<sup>Optional</sup> <a name="AgentArnsInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArnsInput"></a>

```go
func AgentArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `CmkSecretConfigInput`<sup>Optional</sup> <a name="CmkSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.cmkSecretConfigInput"></a>

```go
func CmkSecretConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CustomSecretConfigInput`<sup>Optional</sup> <a name="CustomSecretConfigInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.customSecretConfigInput"></a>

```go
func CustomSecretConfigInput() interface{}
```

- *Type:* interface{}

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKeyInput"></a>

```go
func SecretKeyInput() *string
```

- *Type:* *string

---

##### `ServerCertificateInput`<sup>Optional</sup> <a name="ServerCertificateInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificateInput"></a>

```go
func ServerCertificateInput() *string
```

- *Type:* *string

---

##### `ServerHostnameInput`<sup>Optional</sup> <a name="ServerHostnameInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostnameInput"></a>

```go
func ServerHostnameInput() *string
```

- *Type:* *string

---

##### `ServerPortInput`<sup>Optional</sup> <a name="ServerPortInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPortInput"></a>

```go
func ServerPortInput() *f64
```

- *Type:* *f64

---

##### `ServerProtocolInput`<sup>Optional</sup> <a name="ServerProtocolInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocolInput"></a>

```go
func ServerProtocolInput() *string
```

- *Type:* *string

---

##### `SubdirectoryInput`<sup>Optional</sup> <a name="SubdirectoryInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectoryInput"></a>

```go
func SubdirectoryInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.accessKey"></a>

```go
func AccessKey() *string
```

- *Type:* *string

---

##### `AgentArns`<sup>Required</sup> <a name="AgentArns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.agentArns"></a>

```go
func AgentArns() *[]*string
```

- *Type:* *[]*string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.secretKey"></a>

```go
func SecretKey() *string
```

- *Type:* *string

---

##### `ServerCertificate`<sup>Required</sup> <a name="ServerCertificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverCertificate"></a>

```go
func ServerCertificate() *string
```

- *Type:* *string

---

##### `ServerHostname`<sup>Required</sup> <a name="ServerHostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverHostname"></a>

```go
func ServerHostname() *string
```

- *Type:* *string

---

##### `ServerPort`<sup>Required</sup> <a name="ServerPort" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverPort"></a>

```go
func ServerPort() *f64
```

- *Type:* *f64

---

##### `ServerProtocol`<sup>Required</sup> <a name="ServerProtocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.serverProtocol"></a>

```go
func ServerProtocol() *string
```

- *Type:* *string

---

##### `Subdirectory`<sup>Required</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.subdirectory"></a>

```go
func Subdirectory() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorage.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DatasyncLocationObjectStorageCmkSecretConfig <a name="DatasyncLocationObjectStorageCmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

&datasynclocationobjectstorage.DatasyncLocationObjectStorageCmkSecretConfig {
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Specifies the ARN for the customer-managed AWS KMS key used to encrypt the secret specified for SecretArn.

DataSync provides this key to AWS Secrets Manager.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#kms_key_arn DatasyncLocationObjectStorage#kms_key_arn}

---

### DatasyncLocationObjectStorageConfig <a name="DatasyncLocationObjectStorageConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

&datasynclocationobjectstorage.DatasyncLocationObjectStorageConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccessKey: *string,
	AgentArns: *[]*string,
	BucketName: *string,
	CmkSecretConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig,
	CustomSecretConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig,
	SecretKey: *string,
	ServerCertificate: *string,
	ServerHostname: *string,
	ServerPort: *f64,
	ServerProtocol: *string,
	Subdirectory: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.accessKey">AccessKey</a></code> | <code>*string</code> | Optional. The access key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.agentArns">AgentArns</a></code> | <code>*[]*string</code> | Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | The name of the bucket on the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.cmkSecretConfig">CmkSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a></code> | Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.customSecretConfig">CustomSecretConfig</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a></code> | Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.secretKey">SecretKey</a></code> | <code>*string</code> | Optional. The secret key is used if credentials are required to access the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverCertificate">ServerCertificate</a></code> | <code>*string</code> | X.509 PEM content containing a certificate authority or chain to trust. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverHostname">ServerHostname</a></code> | <code>*string</code> | The name of the self-managed object storage server. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverPort">ServerPort</a></code> | <code>*f64</code> | The port that your self-managed server accepts inbound network traffic on. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverProtocol">ServerProtocol</a></code> | <code>*string</code> | The protocol that the object storage server uses to communicate. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.subdirectory">Subdirectory</a></code> | <code>*string</code> | The subdirectory in the self-managed object storage server that is used to read data from. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.accessKey"></a>

```go
AccessKey *string
```

- *Type:* *string

Optional. The access key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#access_key DatasyncLocationObjectStorage#access_key}

---

##### `AgentArns`<sup>Optional</sup> <a name="AgentArns" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.agentArns"></a>

```go
AgentArns *[]*string
```

- *Type:* *[]*string

Specifies the Amazon Resource Names (ARNs) of the DataSync agents that can connect with your object storage system.

If you are setting up an agentless cross-cloud transfer, you do not need to specify a value for this parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#agent_arns DatasyncLocationObjectStorage#agent_arns}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The name of the bucket on the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#bucket_name DatasyncLocationObjectStorage#bucket_name}

---

##### `CmkSecretConfig`<sup>Optional</sup> <a name="CmkSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.cmkSecretConfig"></a>

```go
CmkSecretConfig DatasyncLocationObjectStorageCmkSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfig">DatasyncLocationObjectStorageCmkSecretConfig</a>

Specifies configuration information for a DataSync-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and a customer-managed AWS KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#cmk_secret_config DatasyncLocationObjectStorage#cmk_secret_config}

---

##### `CustomSecretConfig`<sup>Optional</sup> <a name="CustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.customSecretConfig"></a>

```go
CustomSecretConfig DatasyncLocationObjectStorageCustomSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig">DatasyncLocationObjectStorageCustomSecretConfig</a>

Specifies configuration information for a customer-managed secret, such as an authentication token or set of credentials that DataSync uses to access a specific transfer location, and an IAM role that DataSync can assume and access the customer-managed secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#custom_secret_config DatasyncLocationObjectStorage#custom_secret_config}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.secretKey"></a>

```go
SecretKey *string
```

- *Type:* *string

Optional. The secret key is used if credentials are required to access the self-managed object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#secret_key DatasyncLocationObjectStorage#secret_key}

---

##### `ServerCertificate`<sup>Optional</sup> <a name="ServerCertificate" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverCertificate"></a>

```go
ServerCertificate *string
```

- *Type:* *string

X.509 PEM content containing a certificate authority or chain to trust.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#server_certificate DatasyncLocationObjectStorage#server_certificate}

---

##### `ServerHostname`<sup>Optional</sup> <a name="ServerHostname" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverHostname"></a>

```go
ServerHostname *string
```

- *Type:* *string

The name of the self-managed object storage server.

This value is the IP address or Domain Name Service (DNS) name of the object storage server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#server_hostname DatasyncLocationObjectStorage#server_hostname}

---

##### `ServerPort`<sup>Optional</sup> <a name="ServerPort" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverPort"></a>

```go
ServerPort *f64
```

- *Type:* *f64

The port that your self-managed server accepts inbound network traffic on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#server_port DatasyncLocationObjectStorage#server_port}

---

##### `ServerProtocol`<sup>Optional</sup> <a name="ServerProtocol" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.serverProtocol"></a>

```go
ServerProtocol *string
```

- *Type:* *string

The protocol that the object storage server uses to communicate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#server_protocol DatasyncLocationObjectStorage#server_protocol}

---

##### `Subdirectory`<sup>Optional</sup> <a name="Subdirectory" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.subdirectory"></a>

```go
Subdirectory *string
```

- *Type:* *string

The subdirectory in the self-managed object storage server that is used to read data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#subdirectory DatasyncLocationObjectStorage#subdirectory}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#tags DatasyncLocationObjectStorage#tags}

---

### DatasyncLocationObjectStorageCustomSecretConfig <a name="DatasyncLocationObjectStorageCustomSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

&datasynclocationobjectstorage.DatasyncLocationObjectStorageCustomSecretConfig {
	SecretAccessRoleArn: *string,
	SecretArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretAccessRoleArn">SecretAccessRoleArn</a></code> | <code>*string</code> | Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretArn">SecretArn</a></code> | <code>*string</code> | Specifies the ARN for a customer created AWS Secrets Manager secret. |

---

##### `SecretAccessRoleArn`<sup>Optional</sup> <a name="SecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretAccessRoleArn"></a>

```go
SecretAccessRoleArn *string
```

- *Type:* *string

Specifies the ARN for the AWS Identity and Access Management role that DataSync uses to access the secret specified for SecretArn.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#secret_access_role_arn DatasyncLocationObjectStorage#secret_access_role_arn}

---

##### `SecretArn`<sup>Optional</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfig.property.secretArn"></a>

```go
SecretArn *string
```

- *Type:* *string

Specifies the ARN for a customer created AWS Secrets Manager secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#secret_arn DatasyncLocationObjectStorage#secret_arn}

---

### DatasyncLocationObjectStorageManagedSecretConfig <a name="DatasyncLocationObjectStorageManagedSecretConfig" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

&datasynclocationobjectstorage.DatasyncLocationObjectStorageManagedSecretConfig {

}
```


### DatasyncLocationObjectStorageTags <a name="DatasyncLocationObjectStorageTags" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

&datasynclocationobjectstorage.DatasyncLocationObjectStorageTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.key">Key</a></code> | <code>*string</code> | The key for an AWS resource tag. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.value">Value</a></code> | <code>*string</code> | The value for an AWS resource tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#key DatasyncLocationObjectStorage#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for an AWS resource tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datasync_location_object_storage#value DatasyncLocationObjectStorage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DatasyncLocationObjectStorageCmkSecretConfigOutputReference <a name="DatasyncLocationObjectStorageCmkSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

datasynclocationobjectstorage.NewDatasyncLocationObjectStorageCmkSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationObjectStorageCmkSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCmkSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationObjectStorageCustomSecretConfigOutputReference <a name="DatasyncLocationObjectStorageCustomSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

datasynclocationobjectstorage.NewDatasyncLocationObjectStorageCustomSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationObjectStorageCustomSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretAccessRoleArn">ResetSecretAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretArn">ResetSecretArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecretAccessRoleArn` <a name="ResetSecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretAccessRoleArn"></a>

```go
func ResetSecretAccessRoleArn()
```

##### `ResetSecretArn` <a name="ResetSecretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.resetSecretArn"></a>

```go
func ResetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArnInput">SecretAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArnInput">SecretArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArn">SecretAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretAccessRoleArnInput`<sup>Optional</sup> <a name="SecretAccessRoleArnInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArnInput"></a>

```go
func SecretAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `SecretArnInput`<sup>Optional</sup> <a name="SecretArnInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArnInput"></a>

```go
func SecretArnInput() *string
```

- *Type:* *string

---

##### `SecretAccessRoleArn`<sup>Required</sup> <a name="SecretAccessRoleArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretAccessRoleArn"></a>

```go
func SecretAccessRoleArn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageCustomSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationObjectStorageManagedSecretConfigOutputReference <a name="DatasyncLocationObjectStorageManagedSecretConfigOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

datasynclocationobjectstorage.NewDatasyncLocationObjectStorageManagedSecretConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DatasyncLocationObjectStorageManagedSecretConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig">DatasyncLocationObjectStorageManagedSecretConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DatasyncLocationObjectStorageManagedSecretConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageManagedSecretConfig">DatasyncLocationObjectStorageManagedSecretConfig</a>

---


### DatasyncLocationObjectStorageTagsList <a name="DatasyncLocationObjectStorageTagsList" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

datasynclocationobjectstorage.NewDatasyncLocationObjectStorageTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DatasyncLocationObjectStorageTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get"></a>

```go
func Get(index *f64) DatasyncLocationObjectStorageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DatasyncLocationObjectStorageTagsOutputReference <a name="DatasyncLocationObjectStorageTagsOutputReference" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/datasynclocationobjectstorage"

datasynclocationobjectstorage.NewDatasyncLocationObjectStorageTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DatasyncLocationObjectStorageTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.datasyncLocationObjectStorage.DatasyncLocationObjectStorageTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



