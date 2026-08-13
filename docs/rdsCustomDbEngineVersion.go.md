# `rdsCustomDbEngineVersion` Submodule <a name="`rdsCustomDbEngineVersion` Submodule" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RdsCustomDbEngineVersion <a name="RdsCustomDbEngineVersion" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version awscc_rds_custom_db_engine_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdscustomdbengineversion"

rdscustomdbengineversion.NewRdsCustomDbEngineVersion(scope Construct, id *string, config RdsCustomDbEngineVersionConfig) RdsCustomDbEngineVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig">RdsCustomDbEngineVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig">RdsCustomDbEngineVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFiles">ResetDatabaseInstallationFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName">ResetDatabaseInstallationFilesS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix">ResetDatabaseInstallationFilesS3Prefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetImageId">ResetImageId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest">ResetManifest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceCustomDbEngineVersionIdentifier">ResetSourceCustomDbEngineVersionIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetUseAwsProvidedLatestImage">ResetUseAwsProvidedLatestImage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDatabaseInstallationFiles` <a name="ResetDatabaseInstallationFiles" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFiles"></a>

```go
func ResetDatabaseInstallationFiles()
```

##### `ResetDatabaseInstallationFilesS3BucketName` <a name="ResetDatabaseInstallationFilesS3BucketName" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3BucketName"></a>

```go
func ResetDatabaseInstallationFilesS3BucketName()
```

##### `ResetDatabaseInstallationFilesS3Prefix` <a name="ResetDatabaseInstallationFilesS3Prefix" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDatabaseInstallationFilesS3Prefix"></a>

```go
func ResetDatabaseInstallationFilesS3Prefix()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetImageId` <a name="ResetImageId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetImageId"></a>

```go
func ResetImageId()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetManifest` <a name="ResetManifest" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetManifest"></a>

```go
func ResetManifest()
```

##### `ResetSourceCustomDbEngineVersionIdentifier` <a name="ResetSourceCustomDbEngineVersionIdentifier" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetSourceCustomDbEngineVersionIdentifier"></a>

```go
func ResetSourceCustomDbEngineVersionIdentifier()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUseAwsProvidedLatestImage` <a name="ResetUseAwsProvidedLatestImage" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.resetUseAwsProvidedLatestImage"></a>

```go
func ResetUseAwsProvidedLatestImage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RdsCustomDbEngineVersion resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdscustomdbengineversion"

rdscustomdbengineversion.RdsCustomDbEngineVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdscustomdbengineversion"

rdscustomdbengineversion.RdsCustomDbEngineVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdscustomdbengineversion"

rdscustomdbengineversion.RdsCustomDbEngineVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdscustomdbengineversion"

rdscustomdbengineversion.RdsCustomDbEngineVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RdsCustomDbEngineVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RdsCustomDbEngineVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RdsCustomDbEngineVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RdsCustomDbEngineVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbEngineVersionArn">DbEngineVersionArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList">RdsCustomDbEngineVersionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesInput">DatabaseInstallationFilesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput">DatabaseInstallationFilesS3BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput">DatabaseInstallationFilesS3PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput">EngineInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput">EngineVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput">ManifestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifierInput">SourceCustomDbEngineVersionIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImageInput">UseAwsProvidedLatestImageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFiles">DatabaseInstallationFiles</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName">DatabaseInstallationFilesS3BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix">DatabaseInstallationFilesS3Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine">Engine</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest">Manifest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifier">SourceCustomDbEngineVersionIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImage">UseAwsProvidedLatestImage</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbEngineVersionArn`<sup>Required</sup> <a name="DbEngineVersionArn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.dbEngineVersionArn"></a>

```go
func DbEngineVersionArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tags"></a>

```go
func Tags() RdsCustomDbEngineVersionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList">RdsCustomDbEngineVersionTagsList</a>

---

##### `DatabaseInstallationFilesInput`<sup>Optional</sup> <a name="DatabaseInstallationFilesInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesInput"></a>

```go
func DatabaseInstallationFilesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseInstallationFilesS3BucketNameInput`<sup>Optional</sup> <a name="DatabaseInstallationFilesS3BucketNameInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketNameInput"></a>

```go
func DatabaseInstallationFilesS3BucketNameInput() *string
```

- *Type:* *string

---

##### `DatabaseInstallationFilesS3PrefixInput`<sup>Optional</sup> <a name="DatabaseInstallationFilesS3PrefixInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3PrefixInput"></a>

```go
func DatabaseInstallationFilesS3PrefixInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EngineInput`<sup>Optional</sup> <a name="EngineInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineInput"></a>

```go
func EngineInput() *string
```

- *Type:* *string

---

##### `EngineVersionInput`<sup>Optional</sup> <a name="EngineVersionInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersionInput"></a>

```go
func EngineVersionInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifestInput"></a>

```go
func ManifestInput() *string
```

- *Type:* *string

---

##### `SourceCustomDbEngineVersionIdentifierInput`<sup>Optional</sup> <a name="SourceCustomDbEngineVersionIdentifierInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifierInput"></a>

```go
func SourceCustomDbEngineVersionIdentifierInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `UseAwsProvidedLatestImageInput`<sup>Optional</sup> <a name="UseAwsProvidedLatestImageInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImageInput"></a>

```go
func UseAwsProvidedLatestImageInput() interface{}
```

- *Type:* interface{}

---

##### `DatabaseInstallationFiles`<sup>Required</sup> <a name="DatabaseInstallationFiles" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFiles"></a>

```go
func DatabaseInstallationFiles() *[]*string
```

- *Type:* *[]*string

---

##### `DatabaseInstallationFilesS3BucketName`<sup>Required</sup> <a name="DatabaseInstallationFilesS3BucketName" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3BucketName"></a>

```go
func DatabaseInstallationFilesS3BucketName() *string
```

- *Type:* *string

---

##### `DatabaseInstallationFilesS3Prefix`<sup>Required</sup> <a name="DatabaseInstallationFilesS3Prefix" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.databaseInstallationFilesS3Prefix"></a>

```go
func DatabaseInstallationFilesS3Prefix() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engine"></a>

```go
func Engine() *string
```

- *Type:* *string

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.engineVersion"></a>

```go
func EngineVersion() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.manifest"></a>

```go
func Manifest() *string
```

- *Type:* *string

---

##### `SourceCustomDbEngineVersionIdentifier`<sup>Required</sup> <a name="SourceCustomDbEngineVersionIdentifier" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.sourceCustomDbEngineVersionIdentifier"></a>

```go
func SourceCustomDbEngineVersionIdentifier() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UseAwsProvidedLatestImage`<sup>Required</sup> <a name="UseAwsProvidedLatestImage" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.useAwsProvidedLatestImage"></a>

```go
func UseAwsProvidedLatestImage() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RdsCustomDbEngineVersionConfig <a name="RdsCustomDbEngineVersionConfig" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdscustomdbengineversion"

&rdscustomdbengineversion.RdsCustomDbEngineVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Engine: *string,
	EngineVersion: *string,
	DatabaseInstallationFiles: *[]*string,
	DatabaseInstallationFilesS3BucketName: *string,
	DatabaseInstallationFilesS3Prefix: *string,
	Description: *string,
	ImageId: *string,
	KmsKeyId: *string,
	Manifest: *string,
	SourceCustomDbEngineVersionIdentifier: *string,
	Status: *string,
	Tags: interface{},
	UseAwsProvidedLatestImage: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine">Engine</a></code> | <code>*string</code> | The database engine to use for your custom engine version (CEV). |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion">EngineVersion</a></code> | <code>*string</code> | The name of your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFiles">DatabaseInstallationFiles</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files RdsCustomDbEngineVersion#database_installation_files}. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName">DatabaseInstallationFilesS3BucketName</a></code> | <code>*string</code> | The name of an Amazon S3 bucket that contains database installation files for your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix">DatabaseInstallationFilesS3Prefix</a></code> | <code>*string</code> | The Amazon S3 directory that contains the database installation files for your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of your CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.imageId">ImageId</a></code> | <code>*string</code> | A value that indicates the ID of the AMI. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The AWS KMS key identifier for an encrypted CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest">Manifest</a></code> | <code>*string</code> | The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.  The following JSON fields are valid:   + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.   For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceCustomDbEngineVersionIdentifier">SourceCustomDbEngineVersionIdentifier</a></code> | <code>*string</code> | The ARN of a CEV to use as a source for creating a new CEV. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status">Status</a></code> | <code>*string</code> | A value that indicates the status of a custom engine version (CEV). |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.useAwsProvidedLatestImage">UseAwsProvidedLatestImage</a></code> | <code>interface{}</code> | Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Engine`<sup>Required</sup> <a name="Engine" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engine"></a>

```go
Engine *string
```

- *Type:* *string

The database engine to use for your custom engine version (CEV).

Valid values:

* `custom-oracle-ee`
* `custom-oracle-ee-cdb`
* `sqlserver-dev-ee`
* `sqlserver-ee`
* `sqlserver-se`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#engine RdsCustomDbEngineVersion#engine}

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.engineVersion"></a>

```go
EngineVersion *string
```

- *Type:* *string

The name of your CEV.

The name format is `major version.customized_string`. For example, a valid CEV name is `19.my_cev1`. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of `Engine` and `EngineVersion` is unique per customer per Region.
*Constraints:* Minimum length is 1. Maximum length is 60.
*Pattern:*`^[a-z0-9_.-]{1,60$`}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#engine_version RdsCustomDbEngineVersion#engine_version}

---

##### `DatabaseInstallationFiles`<sup>Optional</sup> <a name="DatabaseInstallationFiles" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFiles"></a>

```go
DatabaseInstallationFiles *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files RdsCustomDbEngineVersion#database_installation_files}.

---

##### `DatabaseInstallationFilesS3BucketName`<sup>Optional</sup> <a name="DatabaseInstallationFilesS3BucketName" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3BucketName"></a>

```go
DatabaseInstallationFilesS3BucketName *string
```

- *Type:* *string

The name of an Amazon S3 bucket that contains database installation files for your CEV.

For example, a valid bucket name is `my-custom-installation-files`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_bucket_name RdsCustomDbEngineVersion#database_installation_files_s3_bucket_name}

---

##### `DatabaseInstallationFilesS3Prefix`<sup>Optional</sup> <a name="DatabaseInstallationFilesS3Prefix" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.databaseInstallationFilesS3Prefix"></a>

```go
DatabaseInstallationFilesS3Prefix *string
```

- *Type:* *string

The Amazon S3 directory that contains the database installation files for your CEV.

For example, a valid bucket name is `123456789012/cev1`. If this setting isn't specified, no prefix is assumed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#database_installation_files_s3_prefix RdsCustomDbEngineVersion#database_installation_files_s3_prefix}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of your CEV.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#description RdsCustomDbEngineVersion#description}

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

A value that indicates the ID of the AMI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#image_id RdsCustomDbEngineVersion#image_id}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The AWS KMS key identifier for an encrypted CEV.

A symmetric encryption KMS key is required for RDS Custom, but optional for Amazon RDS.
If you have an existing symmetric encryption KMS key in your account, you can use it with RDS Custom. No further action is necessary. If you don't already have a symmetric encryption KMS key in your account, follow the instructions in [Creating a symmetric encryption KMS key](https://docs.aws.amazon.com/kms/latest/developerguide/create-keys.html#create-symmetric-cmk) in the *Key Management Service Developer Guide*.
You can choose the same symmetric encryption key when you create a CEV and a DB instance, or choose different keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#kms_key_id RdsCustomDbEngineVersion#kms_key_id}

---

##### `Manifest`<sup>Optional</sup> <a name="Manifest" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.manifest"></a>

```go
Manifest *string
```

- *Type:* *string

The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.  The following JSON fields are valid:   + MediaImportTemplateVersion Version of the CEV manifest. The date is in the format YYYY-MM-DD. + databaseInstallationFileNames Ordered list of installation files for the CEV. + opatchFileNames Ordered list of OPatch installers used for the Oracle DB engine. + psuRuPatchFileNames The PSU and RU patches for this CEV. + OtherPatchFileNames The patches that are not in the list of PSU and RU patches. Amazon RDS applies these patches after applying the PSU and RU patches.   For more information, see [Creating the CEV manifest](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-cev.html#custom-cev.preparing.manifest) in the *Amazon RDS User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#manifest RdsCustomDbEngineVersion#manifest}

---

##### `SourceCustomDbEngineVersionIdentifier`<sup>Optional</sup> <a name="SourceCustomDbEngineVersionIdentifier" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.sourceCustomDbEngineVersionIdentifier"></a>

```go
SourceCustomDbEngineVersionIdentifier *string
```

- *Type:* *string

The ARN of a CEV to use as a source for creating a new CEV.

You can specify a different Amazon Machine Imagine (AMI) by using either `Source` or `UseAwsProvidedLatestImage`. You can't specify a different JSON manifest when you specify `SourceCustomDbEngineVersionIdentifier`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#source_custom_db_engine_version_identifier RdsCustomDbEngineVersion#source_custom_db_engine_version_identifier}

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

A value that indicates the status of a custom engine version (CEV).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#status RdsCustomDbEngineVersion#status}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of tags. For more information, see [Tagging Amazon RDS Resources](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html) in the *Amazon RDS User Guide.*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#tags RdsCustomDbEngineVersion#tags}

---

##### `UseAwsProvidedLatestImage`<sup>Optional</sup> <a name="UseAwsProvidedLatestImage" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionConfig.property.useAwsProvidedLatestImage"></a>

```go
UseAwsProvidedLatestImage interface{}
```

- *Type:* interface{}

Specifies whether to use the latest service-provided Amazon Machine Image (AMI) for the CEV.

If you specify `UseAwsProvidedLatestImage`, you can't also specify `ImageId`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#use_aws_provided_latest_image RdsCustomDbEngineVersion#use_aws_provided_latest_image}

---

### RdsCustomDbEngineVersionTags <a name="RdsCustomDbEngineVersionTags" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdscustomdbengineversion"

&rdscustomdbengineversion.RdsCustomDbEngineVersionTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.key">Key</a></code> | <code>*string</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.value">Value</a></code> | <code>*string</code> | A value is the optional value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

A key is the required name of the tag.

The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#key RdsCustomDbEngineVersion#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

A value is the optional value of the tag.

The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with `aws:` or `rds:`. The string can only contain only the set of Unicode letters, digits, white-space, '*', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\p{L}\p{Z}\p{N}*.:/=+\-@]*)$").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/rds_custom_db_engine_version#value RdsCustomDbEngineVersion#value}

---

## Classes <a name="Classes" id="Classes"></a>

### RdsCustomDbEngineVersionTagsList <a name="RdsCustomDbEngineVersionTagsList" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdscustomdbengineversion"

rdscustomdbengineversion.NewRdsCustomDbEngineVersionTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RdsCustomDbEngineVersionTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.get"></a>

```go
func Get(index *f64) RdsCustomDbEngineVersionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RdsCustomDbEngineVersionTagsOutputReference <a name="RdsCustomDbEngineVersionTagsOutputReference" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rdscustomdbengineversion"

rdscustomdbengineversion.NewRdsCustomDbEngineVersionTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RdsCustomDbEngineVersionTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rdsCustomDbEngineVersion.RdsCustomDbEngineVersionTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



