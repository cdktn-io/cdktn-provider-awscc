# `s3ExpressDirectoryBucket` Submodule <a name="`s3ExpressDirectoryBucket` Submodule" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ExpressDirectoryBucket <a name="S3ExpressDirectoryBucket" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket awscc_s3express_directory_bucket}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucket(scope Construct, id *string, config S3ExpressDirectoryBucketConfig) S3ExpressDirectoryBucket
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig">S3ExpressDirectoryBucketConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig">S3ExpressDirectoryBucketConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption">PutBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations">PutInventoryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration">PutLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations">PutMetricsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketEncryption">ResetBucketEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetInventoryConfigurations">ResetInventoryConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetLifecycleConfiguration">ResetLifecycleConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetMetricsConfigurations">ResetMetricsConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBucketEncryption` <a name="PutBucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption"></a>

```go
func PutBucketEncryption(value S3ExpressDirectoryBucketBucketEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putBucketEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

---

##### `PutInventoryConfigurations` <a name="PutInventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations"></a>

```go
func PutInventoryConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putInventoryConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLifecycleConfiguration` <a name="PutLifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration"></a>

```go
func PutLifecycleConfiguration(value S3ExpressDirectoryBucketLifecycleConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putLifecycleConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

---

##### `PutMetricsConfigurations` <a name="PutMetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations"></a>

```go
func PutMetricsConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putMetricsConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBucketEncryption` <a name="ResetBucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketEncryption"></a>

```go
func ResetBucketEncryption()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetInventoryConfigurations` <a name="ResetInventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetInventoryConfigurations"></a>

```go
func ResetInventoryConfigurations()
```

##### `ResetLifecycleConfiguration` <a name="ResetLifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetLifecycleConfiguration"></a>

```go
func ResetLifecycleConfiguration()
```

##### `ResetMetricsConfigurations` <a name="ResetMetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetMetricsConfigurations"></a>

```go
func ResetMetricsConfigurations()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a S3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.S3ExpressDirectoryBucket_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.S3ExpressDirectoryBucket_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.S3ExpressDirectoryBucket_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.S3ExpressDirectoryBucket_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a S3ExpressDirectoryBucket resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the S3ExpressDirectoryBucket to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing S3ExpressDirectoryBucket that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the S3ExpressDirectoryBucket to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.availabilityZoneName">AvailabilityZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryption">BucketEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference">S3ExpressDirectoryBucketBucketEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurations">InventoryConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList">S3ExpressDirectoryBucketInventoryConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurations">MetricsConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList">S3ExpressDirectoryBucketMetricsConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList">S3ExpressDirectoryBucketTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryptionInput">BucketEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancyInput">DataRedundancyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurationsInput">InventoryConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfigurationInput">LifecycleConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationNameInput">LocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurationsInput">MetricsConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancy">DataRedundancy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationName">LocationName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailabilityZoneName`<sup>Required</sup> <a name="AvailabilityZoneName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.availabilityZoneName"></a>

```go
func AvailabilityZoneName() *string
```

- *Type:* *string

---

##### `BucketEncryption`<sup>Required</sup> <a name="BucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryption"></a>

```go
func BucketEncryption() S3ExpressDirectoryBucketBucketEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference">S3ExpressDirectoryBucketBucketEncryptionOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InventoryConfigurations`<sup>Required</sup> <a name="InventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurations"></a>

```go
func InventoryConfigurations() S3ExpressDirectoryBucketInventoryConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList">S3ExpressDirectoryBucketInventoryConfigurationsList</a>

---

##### `LifecycleConfiguration`<sup>Required</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfiguration"></a>

```go
func LifecycleConfiguration() S3ExpressDirectoryBucketLifecycleConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationOutputReference</a>

---

##### `MetricsConfigurations`<sup>Required</sup> <a name="MetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurations"></a>

```go
func MetricsConfigurations() S3ExpressDirectoryBucketMetricsConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList">S3ExpressDirectoryBucketMetricsConfigurationsList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tags"></a>

```go
func Tags() S3ExpressDirectoryBucketTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList">S3ExpressDirectoryBucketTagsList</a>

---

##### `BucketEncryptionInput`<sup>Optional</sup> <a name="BucketEncryptionInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketEncryptionInput"></a>

```go
func BucketEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `DataRedundancyInput`<sup>Optional</sup> <a name="DataRedundancyInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancyInput"></a>

```go
func DataRedundancyInput() *string
```

- *Type:* *string

---

##### `InventoryConfigurationsInput`<sup>Optional</sup> <a name="InventoryConfigurationsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.inventoryConfigurationsInput"></a>

```go
func InventoryConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `LifecycleConfigurationInput`<sup>Optional</sup> <a name="LifecycleConfigurationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.lifecycleConfigurationInput"></a>

```go
func LifecycleConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `LocationNameInput`<sup>Optional</sup> <a name="LocationNameInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationNameInput"></a>

```go
func LocationNameInput() *string
```

- *Type:* *string

---

##### `MetricsConfigurationsInput`<sup>Optional</sup> <a name="MetricsConfigurationsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.metricsConfigurationsInput"></a>

```go
func MetricsConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `DataRedundancy`<sup>Required</sup> <a name="DataRedundancy" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.dataRedundancy"></a>

```go
func DataRedundancy() *string
```

- *Type:* *string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.locationName"></a>

```go
func LocationName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucket.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ExpressDirectoryBucketBucketEncryption <a name="S3ExpressDirectoryBucketBucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

&s3expressdirectorybucket.S3ExpressDirectoryBucketBucketEncryption {
	ServerSideEncryptionConfiguration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code>interface{}</code> | Specifies the default server-side-encryption configuration. |

---

##### `ServerSideEncryptionConfiguration`<sup>Optional</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption.property.serverSideEncryptionConfiguration"></a>

```go
ServerSideEncryptionConfiguration interface{}
```

- *Type:* interface{}

Specifies the default server-side-encryption configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#server_side_encryption_configuration S3ExpressDirectoryBucket#server_side_encryption_configuration}

---

### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

&s3expressdirectorybucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration {
	BucketKeyEnabled: interface{},
	ServerSideEncryptionByDefault: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>interface{}</code> | Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.serverSideEncryptionByDefault">ServerSideEncryptionByDefault</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a></code> | Specifies the default server-side encryption to apply to new objects in the bucket. |

---

##### `BucketKeyEnabled`<sup>Optional</sup> <a name="BucketKeyEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.bucketKeyEnabled"></a>

```go
BucketKeyEnabled interface{}
```

- *Type:* interface{}

Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket.

Existing objects are not affected. Amazon S3 Express One Zone uses an S3 Bucket Key with SSE-KMS and S3 Bucket Key cannot be disabled. It's only allowed to set the BucketKeyEnabled element to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#bucket_key_enabled S3ExpressDirectoryBucket#bucket_key_enabled}

---

##### `ServerSideEncryptionByDefault`<sup>Optional</sup> <a name="ServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfiguration.property.serverSideEncryptionByDefault"></a>

```go
ServerSideEncryptionByDefault S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

Specifies the default server-side encryption to apply to new objects in the bucket.

If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#server_side_encryption_by_default S3ExpressDirectoryBucket#server_side_encryption_by_default}

---

### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

&s3expressdirectorybucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault {
	KmsMasterKeyId: *string,
	SseAlgorithm: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.sseAlgorithm">SseAlgorithm</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#sse_algorithm S3ExpressDirectoryBucket#sse_algorithm}. |

---

##### `KmsMasterKeyId`<sup>Optional</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.kmsMasterKeyId"></a>

```go
KmsMasterKeyId *string
```

- *Type:* *string

AWS Key Management Service (KMS) customer managed key ID to use for the default encryption.

This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#kms_master_key_id S3ExpressDirectoryBucket#kms_master_key_id}

---

##### `SseAlgorithm`<sup>Optional</sup> <a name="SseAlgorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault.property.sseAlgorithm"></a>

```go
SseAlgorithm *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#sse_algorithm S3ExpressDirectoryBucket#sse_algorithm}.

---

### S3ExpressDirectoryBucketConfig <a name="S3ExpressDirectoryBucketConfig" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

&s3expressdirectorybucket.S3ExpressDirectoryBucketConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataRedundancy: *string,
	LocationName: *string,
	BucketEncryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption,
	BucketName: *string,
	InventoryConfigurations: interface{},
	LifecycleConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration,
	MetricsConfigurations: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dataRedundancy">DataRedundancy</a></code> | <code>*string</code> | Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.locationName">LocationName</a></code> | <code>*string</code> | Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketEncryption">BucketEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a></code> | Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS). |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketName">BucketName</a></code> | <code>*string</code> | Specifies a name for the bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.inventoryConfigurations">InventoryConfigurations</a></code> | <code>interface{}</code> | The inventory configuration for an Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycleConfiguration">LifecycleConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a></code> | Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.metricsConfigurations">MetricsConfigurations</a></code> | <code>interface{}</code> | Specifies the metrics configurations for the Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataRedundancy`<sup>Required</sup> <a name="DataRedundancy" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.dataRedundancy"></a>

```go
DataRedundancy *string
```

- *Type:* *string

Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#data_redundancy S3ExpressDirectoryBucket#data_redundancy}

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.locationName"></a>

```go
LocationName *string
```

- *Type:* *string

Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created.

An example Availability Zone ID value is 'use1-az5'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#location_name S3ExpressDirectoryBucket#location_name}

---

##### `BucketEncryption`<sup>Optional</sup> <a name="BucketEncryption" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketEncryption"></a>

```go
BucketEncryption S3ExpressDirectoryBucketBucketEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryption">S3ExpressDirectoryBucketBucketEncryption</a>

Specifies default encryption for a bucket using server-side encryption with Amazon S3 managed keys (SSE-S3) or AWS KMS keys (SSE-KMS).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#bucket_encryption S3ExpressDirectoryBucket#bucket_encryption}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Specifies a name for the bucket.

The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket_base_name--zone_id--x-s3'. The zone_id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#bucket_name S3ExpressDirectoryBucket#bucket_name}

---

##### `InventoryConfigurations`<sup>Optional</sup> <a name="InventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.inventoryConfigurations"></a>

```go
InventoryConfigurations interface{}
```

- *Type:* interface{}

The inventory configuration for an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#inventory_configurations S3ExpressDirectoryBucket#inventory_configurations}

---

##### `LifecycleConfiguration`<sup>Optional</sup> <a name="LifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.lifecycleConfiguration"></a>

```go
LifecycleConfiguration S3ExpressDirectoryBucketLifecycleConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration">S3ExpressDirectoryBucketLifecycleConfiguration</a>

Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#lifecycle_configuration S3ExpressDirectoryBucket#lifecycle_configuration}

---

##### `MetricsConfigurations`<sup>Optional</sup> <a name="MetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.metricsConfigurations"></a>

```go
MetricsConfigurations interface{}
```

- *Type:* interface{}

Specifies the metrics configurations for the Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#metrics_configurations S3ExpressDirectoryBucket#metrics_configurations}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#tags S3ExpressDirectoryBucket#tags}.

---

### S3ExpressDirectoryBucketInventoryConfigurations <a name="S3ExpressDirectoryBucketInventoryConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

&s3expressdirectorybucket.S3ExpressDirectoryBucketInventoryConfigurations {
	Destination: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination,
	Enabled: interface{},
	Id: *string,
	IncludedObjectVersions: *string,
	OptionalFields: *[]*string,
	Prefix: *string,
	ScheduleFrequency: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a></code> | Specifies information about where to publish inventory reports for an Amazon S3 Express bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.enabled">Enabled</a></code> | <code>interface{}</code> | Specifies whether the inventory is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.id">Id</a></code> | <code>*string</code> | The ID used to identify the inventory configuration. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.includedObjectVersions">IncludedObjectVersions</a></code> | <code>*string</code> | Object versions to include in the inventory list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.optionalFields">OptionalFields</a></code> | <code>*[]*string</code> | Contains the optional fields that are included in the inventory results. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.prefix">Prefix</a></code> | <code>*string</code> | The prefix that is prepended to all inventory results. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.scheduleFrequency">ScheduleFrequency</a></code> | <code>*string</code> | Specifies the schedule for generating inventory results. |

---

##### `Destination`<sup>Optional</sup> <a name="Destination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.destination"></a>

```go
Destination S3ExpressDirectoryBucketInventoryConfigurationsDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

Specifies information about where to publish inventory reports for an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#destination S3ExpressDirectoryBucket#destination}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Specifies whether the inventory is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#enabled S3ExpressDirectoryBucket#enabled}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID used to identify the inventory configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IncludedObjectVersions`<sup>Optional</sup> <a name="IncludedObjectVersions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.includedObjectVersions"></a>

```go
IncludedObjectVersions *string
```

- *Type:* *string

Object versions to include in the inventory list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#included_object_versions S3ExpressDirectoryBucket#included_object_versions}

---

##### `OptionalFields`<sup>Optional</sup> <a name="OptionalFields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.optionalFields"></a>

```go
OptionalFields *[]*string
```

- *Type:* *[]*string

Contains the optional fields that are included in the inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#optional_fields S3ExpressDirectoryBucket#optional_fields}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The prefix that is prepended to all inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

##### `ScheduleFrequency`<sup>Optional</sup> <a name="ScheduleFrequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurations.property.scheduleFrequency"></a>

```go
ScheduleFrequency *string
```

- *Type:* *string

Specifies the schedule for generating inventory results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#schedule_frequency S3ExpressDirectoryBucket#schedule_frequency}

---

### S3ExpressDirectoryBucketInventoryConfigurationsDestination <a name="S3ExpressDirectoryBucketInventoryConfigurationsDestination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

&s3expressdirectorybucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination {
	BucketAccountId: *string,
	BucketArn: *string,
	Format: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketAccountId">BucketAccountId</a></code> | <code>*string</code> | The account ID that owns the destination S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketArn">BucketArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.format">Format</a></code> | <code>*string</code> | Specifies the file format used when exporting data to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.prefix">Prefix</a></code> | <code>*string</code> | The prefix to use when exporting data. The prefix is prepended to all results. |

---

##### `BucketAccountId`<sup>Optional</sup> <a name="BucketAccountId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketAccountId"></a>

```go
BucketAccountId *string
```

- *Type:* *string

The account ID that owns the destination S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#bucket_account_id S3ExpressDirectoryBucket#bucket_account_id}

---

##### `BucketArn`<sup>Optional</sup> <a name="BucketArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.bucketArn"></a>

```go
BucketArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#bucket_arn S3ExpressDirectoryBucket#bucket_arn}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.format"></a>

```go
Format *string
```

- *Type:* *string

Specifies the file format used when exporting data to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#format S3ExpressDirectoryBucket#format}

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The prefix to use when exporting data. The prefix is prepended to all results.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

### S3ExpressDirectoryBucketLifecycleConfiguration <a name="S3ExpressDirectoryBucketLifecycleConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

&s3expressdirectorybucket.S3ExpressDirectoryBucketLifecycleConfiguration {
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.property.rules">Rules</a></code> | <code>interface{}</code> | A lifecycle rule for individual objects in an Amazon S3 Express bucket. |

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfiguration.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

A lifecycle rule for individual objects in an Amazon S3 Express bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#rules S3ExpressDirectoryBucket#rules}

---

### S3ExpressDirectoryBucketLifecycleConfigurationRules <a name="S3ExpressDirectoryBucketLifecycleConfigurationRules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

&s3expressdirectorybucket.S3ExpressDirectoryBucketLifecycleConfigurationRules {
	AbortIncompleteMultipartUpload: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload,
	ExpirationInDays: *f64,
	Id: *string,
	ObjectSizeGreaterThan: *string,
	ObjectSizeLessThan: *string,
	Prefix: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload">AbortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a></code> | Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.expirationInDays">ExpirationInDays</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#expiration_in_days S3ExpressDirectoryBucket#expiration_in_days}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeGreaterThan">ObjectSizeGreaterThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#object_size_greater_than S3ExpressDirectoryBucket#object_size_greater_than}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeLessThan">ObjectSizeLessThan</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#object_size_less_than S3ExpressDirectoryBucket#object_size_less_than}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.prefix">Prefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#status S3ExpressDirectoryBucket#status}. |

---

##### `AbortIncompleteMultipartUpload`<sup>Optional</sup> <a name="AbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.abortIncompleteMultipartUpload"></a>

```go
AbortIncompleteMultipartUpload S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

Specifies the days since the initiation of an incomplete multipart upload that Amazon S3 will wait before permanently removing all parts of the upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#abort_incomplete_multipart_upload S3ExpressDirectoryBucket#abort_incomplete_multipart_upload}

---

##### `ExpirationInDays`<sup>Optional</sup> <a name="ExpirationInDays" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.expirationInDays"></a>

```go
ExpirationInDays *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#expiration_in_days S3ExpressDirectoryBucket#expiration_in_days}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObjectSizeGreaterThan`<sup>Optional</sup> <a name="ObjectSizeGreaterThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeGreaterThan"></a>

```go
ObjectSizeGreaterThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#object_size_greater_than S3ExpressDirectoryBucket#object_size_greater_than}.

---

##### `ObjectSizeLessThan`<sup>Optional</sup> <a name="ObjectSizeLessThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.objectSizeLessThan"></a>

```go
ObjectSizeLessThan *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#object_size_less_than S3ExpressDirectoryBucket#object_size_less_than}.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRules.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#status S3ExpressDirectoryBucket#status}.

---

### S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

&s3expressdirectorybucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload {
	DaysAfterInitiation: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation">DaysAfterInitiation</a></code> | <code>*f64</code> | Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload. |

---

##### `DaysAfterInitiation`<sup>Optional</sup> <a name="DaysAfterInitiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload.property.daysAfterInitiation"></a>

```go
DaysAfterInitiation *f64
```

- *Type:* *f64

Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#days_after_initiation S3ExpressDirectoryBucket#days_after_initiation}

---

### S3ExpressDirectoryBucketMetricsConfigurations <a name="S3ExpressDirectoryBucketMetricsConfigurations" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

&s3expressdirectorybucket.S3ExpressDirectoryBucketMetricsConfigurations {
	AccessPointArn: *string,
	Id: *string,
	Prefix: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.accessPointArn">AccessPointArn</a></code> | <code>*string</code> | The access point ARN used when evaluating a metrics filter. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.id">Id</a></code> | <code>*string</code> | The ID used to identify the metrics configuration. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.prefix">Prefix</a></code> | <code>*string</code> | The prefix used when evaluating a metrics filter. |

---

##### `AccessPointArn`<sup>Optional</sup> <a name="AccessPointArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.accessPointArn"></a>

```go
AccessPointArn *string
```

- *Type:* *string

The access point ARN used when evaluating a metrics filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#access_point_arn S3ExpressDirectoryBucket#access_point_arn}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID used to identify the metrics configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#id S3ExpressDirectoryBucket#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurations.property.prefix"></a>

```go
Prefix *string
```

- *Type:* *string

The prefix used when evaluating a metrics filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#prefix S3ExpressDirectoryBucket#prefix}

---

### S3ExpressDirectoryBucketTags <a name="S3ExpressDirectoryBucketTags" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

&s3expressdirectorybucket.S3ExpressDirectoryBucketTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#key S3ExpressDirectoryBucket#key}. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#value S3ExpressDirectoryBucket#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#key S3ExpressDirectoryBucket#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/s3express_directory_bucket#value S3ExpressDirectoryBucket#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ExpressDirectoryBucketBucketEncryptionOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketBucketEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ExpressDirectoryBucketBucketEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration">PutServerSideEncryptionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resetServerSideEncryptionConfiguration">ResetServerSideEncryptionConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServerSideEncryptionConfiguration` <a name="PutServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration"></a>

```go
func PutServerSideEncryptionConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.putServerSideEncryptionConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetServerSideEncryptionConfiguration` <a name="ResetServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.resetServerSideEncryptionConfiguration"></a>

```go
func ResetServerSideEncryptionConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration">ServerSideEncryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfigurationInput">ServerSideEncryptionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionConfiguration`<sup>Required</sup> <a name="ServerSideEncryptionConfiguration" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfiguration"></a>

```go
func ServerSideEncryptionConfiguration() S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList</a>

---

##### `ServerSideEncryptionConfigurationInput`<sup>Optional</sup> <a name="ServerSideEncryptionConfigurationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.serverSideEncryptionConfigurationInput"></a>

```go
func ServerSideEncryptionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get"></a>

```go
func Get(index *f64) S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault">PutServerSideEncryptionByDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetBucketKeyEnabled">ResetBucketKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetServerSideEncryptionByDefault">ResetServerSideEncryptionByDefault</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutServerSideEncryptionByDefault` <a name="PutServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault"></a>

```go
func PutServerSideEncryptionByDefault(value S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.putServerSideEncryptionByDefault.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefault</a>

---

##### `ResetBucketKeyEnabled` <a name="ResetBucketKeyEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetBucketKeyEnabled"></a>

```go
func ResetBucketKeyEnabled()
```

##### `ResetServerSideEncryptionByDefault` <a name="ResetServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.resetServerSideEncryptionByDefault"></a>

```go
func ResetServerSideEncryptionByDefault()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault">ServerSideEncryptionByDefault</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabledInput">BucketKeyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefaultInput">ServerSideEncryptionByDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled">BucketKeyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServerSideEncryptionByDefault`<sup>Required</sup> <a name="ServerSideEncryptionByDefault" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefault"></a>

```go
func ServerSideEncryptionByDefault() S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference">S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference</a>

---

##### `BucketKeyEnabledInput`<sup>Optional</sup> <a name="BucketKeyEnabledInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabledInput"></a>

```go
func BucketKeyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `ServerSideEncryptionByDefaultInput`<sup>Optional</sup> <a name="ServerSideEncryptionByDefaultInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.serverSideEncryptionByDefaultInput"></a>

```go
func ServerSideEncryptionByDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `BucketKeyEnabled`<sup>Required</sup> <a name="BucketKeyEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.bucketKeyEnabled"></a>

```go
func BucketKeyEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference <a name="S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId">ResetKmsMasterKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetSseAlgorithm">ResetSseAlgorithm</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsMasterKeyId` <a name="ResetKmsMasterKeyId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetKmsMasterKeyId"></a>

```go
func ResetKmsMasterKeyId()
```

##### `ResetSseAlgorithm` <a name="ResetSseAlgorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.resetSseAlgorithm"></a>

```go
func ResetSseAlgorithm()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput">KmsMasterKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput">SseAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId">KmsMasterKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm">SseAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsMasterKeyIdInput`<sup>Optional</sup> <a name="KmsMasterKeyIdInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyIdInput"></a>

```go
func KmsMasterKeyIdInput() *string
```

- *Type:* *string

---

##### `SseAlgorithmInput`<sup>Optional</sup> <a name="SseAlgorithmInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithmInput"></a>

```go
func SseAlgorithmInput() *string
```

- *Type:* *string

---

##### `KmsMasterKeyId`<sup>Required</sup> <a name="KmsMasterKeyId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.kmsMasterKeyId"></a>

```go
func KmsMasterKeyId() *string
```

- *Type:* *string

---

##### `SseAlgorithm`<sup>Required</sup> <a name="SseAlgorithm" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.sseAlgorithm"></a>

```go
func SseAlgorithm() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketBucketEncryptionServerSideEncryptionConfigurationServerSideEncryptionByDefaultOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference <a name="S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketAccountId">ResetBucketAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketArn">ResetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketAccountId` <a name="ResetBucketAccountId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketAccountId"></a>

```go
func ResetBucketAccountId()
```

##### `ResetBucketArn` <a name="ResetBucketArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetBucketArn"></a>

```go
func ResetBucketArn()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountIdInput">BucketAccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArnInput">BucketArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId">BucketAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn">BucketArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketAccountIdInput`<sup>Optional</sup> <a name="BucketAccountIdInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountIdInput"></a>

```go
func BucketAccountIdInput() *string
```

- *Type:* *string

---

##### `BucketArnInput`<sup>Optional</sup> <a name="BucketArnInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArnInput"></a>

```go
func BucketArnInput() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `BucketAccountId`<sup>Required</sup> <a name="BucketAccountId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketAccountId"></a>

```go
func BucketAccountId() *string
```

- *Type:* *string

---

##### `BucketArn`<sup>Required</sup> <a name="BucketArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.bucketArn"></a>

```go
func BucketArn() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketInventoryConfigurationsList <a name="S3ExpressDirectoryBucketInventoryConfigurationsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketInventoryConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ExpressDirectoryBucketInventoryConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get"></a>

```go
func Get(index *f64) S3ExpressDirectoryBucketInventoryConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketInventoryConfigurationsOutputReference <a name="S3ExpressDirectoryBucketInventoryConfigurationsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketInventoryConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ExpressDirectoryBucketInventoryConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination">PutDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetDestination">ResetDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetIncludedObjectVersions">ResetIncludedObjectVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetOptionalFields">ResetOptionalFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetScheduleFrequency">ResetScheduleFrequency</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestination` <a name="PutDestination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination"></a>

```go
func PutDestination(value S3ExpressDirectoryBucketInventoryConfigurationsDestination)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.putDestination.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestination">S3ExpressDirectoryBucketInventoryConfigurationsDestination</a>

---

##### `ResetDestination` <a name="ResetDestination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetDestination"></a>

```go
func ResetDestination()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetIncludedObjectVersions` <a name="ResetIncludedObjectVersions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetIncludedObjectVersions"></a>

```go
func ResetIncludedObjectVersions()
```

##### `ResetOptionalFields` <a name="ResetOptionalFields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetOptionalFields"></a>

```go
func ResetOptionalFields()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetScheduleFrequency` <a name="ResetScheduleFrequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.resetScheduleFrequency"></a>

```go
func ResetScheduleFrequency()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination">Destination</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destinationInput">DestinationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersionsInput">IncludedObjectVersionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFieldsInput">OptionalFieldsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequencyInput">ScheduleFrequencyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions">IncludedObjectVersions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields">OptionalFields</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency">ScheduleFrequency</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destination`<sup>Required</sup> <a name="Destination" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destination"></a>

```go
func Destination() S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference">S3ExpressDirectoryBucketInventoryConfigurationsDestinationOutputReference</a>

---

##### `DestinationInput`<sup>Optional</sup> <a name="DestinationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.destinationInput"></a>

```go
func DestinationInput() interface{}
```

- *Type:* interface{}

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IncludedObjectVersionsInput`<sup>Optional</sup> <a name="IncludedObjectVersionsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersionsInput"></a>

```go
func IncludedObjectVersionsInput() *string
```

- *Type:* *string

---

##### `OptionalFieldsInput`<sup>Optional</sup> <a name="OptionalFieldsInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFieldsInput"></a>

```go
func OptionalFieldsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `ScheduleFrequencyInput`<sup>Optional</sup> <a name="ScheduleFrequencyInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequencyInput"></a>

```go
func ScheduleFrequencyInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IncludedObjectVersions`<sup>Required</sup> <a name="IncludedObjectVersions" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.includedObjectVersions"></a>

```go
func IncludedObjectVersions() *string
```

- *Type:* *string

---

##### `OptionalFields`<sup>Required</sup> <a name="OptionalFields" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.optionalFields"></a>

```go
func OptionalFields() *[]*string
```

- *Type:* *[]*string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `ScheduleFrequency`<sup>Required</sup> <a name="ScheduleFrequency" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.scheduleFrequency"></a>

```go
func ScheduleFrequency() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketInventoryConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketLifecycleConfigurationOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketLifecycleConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ExpressDirectoryBucketLifecycleConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resetRules">ResetRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRules` <a name="ResetRules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.resetRules"></a>

```go
func ResetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList">S3ExpressDirectoryBucketLifecycleConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rules"></a>

```go
func Rules() S3ExpressDirectoryBucketLifecycleConfigurationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList">S3ExpressDirectoryBucketLifecycleConfigurationRulesList</a>

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation">ResetDaysAfterInitiation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDaysAfterInitiation` <a name="ResetDaysAfterInitiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.resetDaysAfterInitiation"></a>

```go
func ResetDaysAfterInitiation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput">DaysAfterInitiationInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation">DaysAfterInitiation</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysAfterInitiationInput`<sup>Optional</sup> <a name="DaysAfterInitiationInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiationInput"></a>

```go
func DaysAfterInitiationInput() *f64
```

- *Type:* *f64

---

##### `DaysAfterInitiation`<sup>Required</sup> <a name="DaysAfterInitiation" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.daysAfterInitiation"></a>

```go
func DaysAfterInitiation() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesList <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketLifecycleConfigurationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ExpressDirectoryBucketLifecycleConfigurationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get"></a>

```go
func Get(index *f64) S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference <a name="S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload">PutAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload">ResetAbortIncompleteMultipartUpload</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays">ResetExpirationInDays</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeGreaterThan">ResetObjectSizeGreaterThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeLessThan">ResetObjectSizeLessThan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbortIncompleteMultipartUpload` <a name="PutAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload"></a>

```go
func PutAbortIncompleteMultipartUpload(value S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.putAbortIncompleteMultipartUpload.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUpload</a>

---

##### `ResetAbortIncompleteMultipartUpload` <a name="ResetAbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetAbortIncompleteMultipartUpload"></a>

```go
func ResetAbortIncompleteMultipartUpload()
```

##### `ResetExpirationInDays` <a name="ResetExpirationInDays" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetExpirationInDays"></a>

```go
func ResetExpirationInDays()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetObjectSizeGreaterThan` <a name="ResetObjectSizeGreaterThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeGreaterThan"></a>

```go
func ResetObjectSizeGreaterThan()
```

##### `ResetObjectSizeLessThan` <a name="ResetObjectSizeLessThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetObjectSizeLessThan"></a>

```go
func ResetObjectSizeLessThan()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.resetStatus"></a>

```go
func ResetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload">AbortIncompleteMultipartUpload</a></code> | <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput">AbortIncompleteMultipartUploadInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput">ExpirationInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThanInput">ObjectSizeGreaterThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThanInput">ObjectSizeLessThanInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays">ExpirationInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan">ObjectSizeGreaterThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan">ObjectSizeLessThan</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AbortIncompleteMultipartUpload`<sup>Required</sup> <a name="AbortIncompleteMultipartUpload" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUpload"></a>

```go
func AbortIncompleteMultipartUpload() S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference">S3ExpressDirectoryBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadOutputReference</a>

---

##### `AbortIncompleteMultipartUploadInput`<sup>Optional</sup> <a name="AbortIncompleteMultipartUploadInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.abortIncompleteMultipartUploadInput"></a>

```go
func AbortIncompleteMultipartUploadInput() interface{}
```

- *Type:* interface{}

---

##### `ExpirationInDaysInput`<sup>Optional</sup> <a name="ExpirationInDaysInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDaysInput"></a>

```go
func ExpirationInDaysInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ObjectSizeGreaterThanInput`<sup>Optional</sup> <a name="ObjectSizeGreaterThanInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThanInput"></a>

```go
func ObjectSizeGreaterThanInput() *string
```

- *Type:* *string

---

##### `ObjectSizeLessThanInput`<sup>Optional</sup> <a name="ObjectSizeLessThanInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThanInput"></a>

```go
func ObjectSizeLessThanInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `ExpirationInDays`<sup>Required</sup> <a name="ExpirationInDays" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.expirationInDays"></a>

```go
func ExpirationInDays() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ObjectSizeGreaterThan`<sup>Required</sup> <a name="ObjectSizeGreaterThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeGreaterThan"></a>

```go
func ObjectSizeGreaterThan() *string
```

- *Type:* *string

---

##### `ObjectSizeLessThan`<sup>Required</sup> <a name="ObjectSizeLessThan" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.objectSizeLessThan"></a>

```go
func ObjectSizeLessThan() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketLifecycleConfigurationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketMetricsConfigurationsList <a name="S3ExpressDirectoryBucketMetricsConfigurationsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketMetricsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ExpressDirectoryBucketMetricsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get"></a>

```go
func Get(index *f64) S3ExpressDirectoryBucketMetricsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketMetricsConfigurationsOutputReference <a name="S3ExpressDirectoryBucketMetricsConfigurationsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketMetricsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ExpressDirectoryBucketMetricsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetAccessPointArn">ResetAccessPointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessPointArn` <a name="ResetAccessPointArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetAccessPointArn"></a>

```go
func ResetAccessPointArn()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetId"></a>

```go
func ResetId()
```

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.resetPrefix"></a>

```go
func ResetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArnInput">AccessPointArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefixInput">PrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn">AccessPointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessPointArnInput`<sup>Optional</sup> <a name="AccessPointArnInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArnInput"></a>

```go
func AccessPointArnInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefixInput"></a>

```go
func PrefixInput() *string
```

- *Type:* *string

---

##### `AccessPointArn`<sup>Required</sup> <a name="AccessPointArn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.accessPointArn"></a>

```go
func AccessPointArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketMetricsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketTagsList <a name="S3ExpressDirectoryBucketTagsList" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) S3ExpressDirectoryBucketTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get"></a>

```go
func Get(index *f64) S3ExpressDirectoryBucketTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### S3ExpressDirectoryBucketTagsOutputReference <a name="S3ExpressDirectoryBucketTagsOutputReference" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/s3expressdirectorybucket"

s3expressdirectorybucket.NewS3ExpressDirectoryBucketTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) S3ExpressDirectoryBucketTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.s3ExpressDirectoryBucket.S3ExpressDirectoryBucketTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



