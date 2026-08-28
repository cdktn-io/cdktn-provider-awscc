# `comprehendDocumentClassifier` Submodule <a name="`comprehendDocumentClassifier` Submodule" id="@cdktn/provider-awscc.comprehendDocumentClassifier"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComprehendDocumentClassifier <a name="ComprehendDocumentClassifier" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier awscc_comprehend_document_classifier}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifier(scope Construct, id *string, config ComprehendDocumentClassifierConfig) ComprehendDocumentClassifier
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig">ComprehendDocumentClassifierConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig">ComprehendDocumentClassifierConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig">PutInputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig">PutOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig">PutVpcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelKmsKeyId">ResetModelKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelPolicy">ResetModelPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOutputDataConfig">ResetOutputDataConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionName">ResetVersionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVolumeKmsKeyId">ResetVolumeKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVpcConfig">ResetVpcConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputDataConfig` <a name="PutInputDataConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig"></a>

```go
func PutInputDataConfig(value ComprehendDocumentClassifierInputDataConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putInputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

---

##### `PutOutputDataConfig` <a name="PutOutputDataConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig"></a>

```go
func PutOutputDataConfig(value ComprehendDocumentClassifierOutputDataConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putOutputDataConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVpcConfig` <a name="PutVpcConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig"></a>

```go
func PutVpcConfig(value ComprehendDocumentClassifierVpcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.putVpcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

---

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetMode"></a>

```go
func ResetMode()
```

##### `ResetModelKmsKeyId` <a name="ResetModelKmsKeyId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelKmsKeyId"></a>

```go
func ResetModelKmsKeyId()
```

##### `ResetModelPolicy` <a name="ResetModelPolicy" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetModelPolicy"></a>

```go
func ResetModelPolicy()
```

##### `ResetOutputDataConfig` <a name="ResetOutputDataConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetOutputDataConfig"></a>

```go
func ResetOutputDataConfig()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVersionName` <a name="ResetVersionName" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVersionName"></a>

```go
func ResetVersionName()
```

##### `ResetVolumeKmsKeyId` <a name="ResetVolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVolumeKmsKeyId"></a>

```go
func ResetVolumeKmsKeyId()
```

##### `ResetVpcConfig` <a name="ResetVpcConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.resetVpcConfig"></a>

```go
func ResetVpcConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ComprehendDocumentClassifier resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.ComprehendDocumentClassifier_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.ComprehendDocumentClassifier_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.ComprehendDocumentClassifier_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.ComprehendDocumentClassifier_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ComprehendDocumentClassifier resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComprehendDocumentClassifier to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComprehendDocumentClassifier that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ComprehendDocumentClassifier to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference">ComprehendDocumentClassifierInputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfig">OutputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference">ComprehendDocumentClassifierOutputDataConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList">ComprehendDocumentClassifierTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference">ComprehendDocumentClassifierVpcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArnInput">DataAccessRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.documentClassifierNameInput">DocumentClassifierNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfigInput">InputDataConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCodeInput">LanguageCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyIdInput">ModelKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelPolicyInput">ModelPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfigInput">OutputDataConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNameInput">VersionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyIdInput">VolumeKmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfigInput">VpcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.documentClassifierName">DocumentClassifierName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCode">LanguageCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelPolicy">ModelPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionName">VersionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfig"></a>

```go
func InputDataConfig() ComprehendDocumentClassifierInputDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference">ComprehendDocumentClassifierInputDataConfigOutputReference</a>

---

##### `OutputDataConfig`<sup>Required</sup> <a name="OutputDataConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfig"></a>

```go
func OutputDataConfig() ComprehendDocumentClassifierOutputDataConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference">ComprehendDocumentClassifierOutputDataConfigOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tags"></a>

```go
func Tags() ComprehendDocumentClassifierTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList">ComprehendDocumentClassifierTagsList</a>

---

##### `VpcConfig`<sup>Required</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfig"></a>

```go
func VpcConfig() ComprehendDocumentClassifierVpcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference">ComprehendDocumentClassifierVpcConfigOutputReference</a>

---

##### `DataAccessRoleArnInput`<sup>Optional</sup> <a name="DataAccessRoleArnInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArnInput"></a>

```go
func DataAccessRoleArnInput() *string
```

- *Type:* *string

---

##### `DocumentClassifierNameInput`<sup>Optional</sup> <a name="DocumentClassifierNameInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.documentClassifierNameInput"></a>

```go
func DocumentClassifierNameInput() *string
```

- *Type:* *string

---

##### `InputDataConfigInput`<sup>Optional</sup> <a name="InputDataConfigInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.inputDataConfigInput"></a>

```go
func InputDataConfigInput() interface{}
```

- *Type:* interface{}

---

##### `LanguageCodeInput`<sup>Optional</sup> <a name="LanguageCodeInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCodeInput"></a>

```go
func LanguageCodeInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `ModelKmsKeyIdInput`<sup>Optional</sup> <a name="ModelKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyIdInput"></a>

```go
func ModelKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `ModelPolicyInput`<sup>Optional</sup> <a name="ModelPolicyInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelPolicyInput"></a>

```go
func ModelPolicyInput() *string
```

- *Type:* *string

---

##### `OutputDataConfigInput`<sup>Optional</sup> <a name="OutputDataConfigInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.outputDataConfigInput"></a>

```go
func OutputDataConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionNameInput`<sup>Optional</sup> <a name="VersionNameInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionNameInput"></a>

```go
func VersionNameInput() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyIdInput`<sup>Optional</sup> <a name="VolumeKmsKeyIdInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyIdInput"></a>

```go
func VolumeKmsKeyIdInput() *string
```

- *Type:* *string

---

##### `VpcConfigInput`<sup>Optional</sup> <a name="VpcConfigInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.vpcConfigInput"></a>

```go
func VpcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.dataAccessRoleArn"></a>

```go
func DataAccessRoleArn() *string
```

- *Type:* *string

---

##### `DocumentClassifierName`<sup>Required</sup> <a name="DocumentClassifierName" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.documentClassifierName"></a>

```go
func DocumentClassifierName() *string
```

- *Type:* *string

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.languageCode"></a>

```go
func LanguageCode() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ModelKmsKeyId`<sup>Required</sup> <a name="ModelKmsKeyId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelKmsKeyId"></a>

```go
func ModelKmsKeyId() *string
```

- *Type:* *string

---

##### `ModelPolicy`<sup>Required</sup> <a name="ModelPolicy" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.modelPolicy"></a>

```go
func ModelPolicy() *string
```

- *Type:* *string

---

##### `VersionName`<sup>Required</sup> <a name="VersionName" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.versionName"></a>

```go
func VersionName() *string
```

- *Type:* *string

---

##### `VolumeKmsKeyId`<sup>Required</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.volumeKmsKeyId"></a>

```go
func VolumeKmsKeyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifier.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComprehendDocumentClassifierConfig <a name="ComprehendDocumentClassifierConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DataAccessRoleArn: *string,
	DocumentClassifierName: *string,
	InputDataConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig,
	LanguageCode: *string,
	Mode: *string,
	ModelKmsKeyId: *string,
	ModelPolicy: *string,
	OutputDataConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig,
	Tags: interface{},
	VersionName: *string,
	VolumeKmsKeyId: *string,
	VpcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dataAccessRoleArn">DataAccessRoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.documentClassifierName">DocumentClassifierName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#document_classifier_name ComprehendDocumentClassifier#document_classifier_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.inputDataConfig">InputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#input_data_config ComprehendDocumentClassifier#input_data_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.languageCode">LanguageCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.mode">Mode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelKmsKeyId">ModelKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelPolicy">ModelPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#model_policy ComprehendDocumentClassifier#model_policy}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.outputDataConfig">OutputDataConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#output_data_config ComprehendDocumentClassifier#output_data_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionName">VersionName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.volumeKmsKeyId">VolumeKmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.vpcConfig">VpcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#vpc_config ComprehendDocumentClassifier#vpc_config}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataAccessRoleArn`<sup>Required</sup> <a name="DataAccessRoleArn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.dataAccessRoleArn"></a>

```go
DataAccessRoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#data_access_role_arn ComprehendDocumentClassifier#data_access_role_arn}.

---

##### `DocumentClassifierName`<sup>Required</sup> <a name="DocumentClassifierName" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.documentClassifierName"></a>

```go
DocumentClassifierName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#document_classifier_name ComprehendDocumentClassifier#document_classifier_name}.

---

##### `InputDataConfig`<sup>Required</sup> <a name="InputDataConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.inputDataConfig"></a>

```go
InputDataConfig ComprehendDocumentClassifierInputDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig">ComprehendDocumentClassifierInputDataConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#input_data_config ComprehendDocumentClassifier#input_data_config}.

---

##### `LanguageCode`<sup>Required</sup> <a name="LanguageCode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.languageCode"></a>

```go
LanguageCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#language_code ComprehendDocumentClassifier#language_code}.

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#mode ComprehendDocumentClassifier#mode}.

---

##### `ModelKmsKeyId`<sup>Optional</sup> <a name="ModelKmsKeyId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelKmsKeyId"></a>

```go
ModelKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#model_kms_key_id ComprehendDocumentClassifier#model_kms_key_id}.

---

##### `ModelPolicy`<sup>Optional</sup> <a name="ModelPolicy" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.modelPolicy"></a>

```go
ModelPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#model_policy ComprehendDocumentClassifier#model_policy}.

---

##### `OutputDataConfig`<sup>Optional</sup> <a name="OutputDataConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.outputDataConfig"></a>

```go
OutputDataConfig ComprehendDocumentClassifierOutputDataConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig">ComprehendDocumentClassifierOutputDataConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#output_data_config ComprehendDocumentClassifier#output_data_config}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#tags ComprehendDocumentClassifier#tags}.

---

##### `VersionName`<sup>Optional</sup> <a name="VersionName" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.versionName"></a>

```go
VersionName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#version_name ComprehendDocumentClassifier#version_name}.

---

##### `VolumeKmsKeyId`<sup>Optional</sup> <a name="VolumeKmsKeyId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.volumeKmsKeyId"></a>

```go
VolumeKmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#volume_kms_key_id ComprehendDocumentClassifier#volume_kms_key_id}.

---

##### `VpcConfig`<sup>Optional</sup> <a name="VpcConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierConfig.property.vpcConfig"></a>

```go
VpcConfig ComprehendDocumentClassifierVpcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig">ComprehendDocumentClassifierVpcConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#vpc_config ComprehendDocumentClassifier#vpc_config}.

---

### ComprehendDocumentClassifierInputDataConfig <a name="ComprehendDocumentClassifierInputDataConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierInputDataConfig {
	AugmentedManifests: interface{},
	DataFormat: *string,
	DocumentReaderConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig,
	Documents: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments,
	DocumentType: *string,
	LabelDelimiter: *string,
	S3Uri: *string,
	TestS3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.augmentedManifests">AugmentedManifests</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#augmented_manifests ComprehendDocumentClassifier#augmented_manifests}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.dataFormat">DataFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documentReaderConfig">DocumentReaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#document_reader_config ComprehendDocumentClassifier#document_reader_config}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documents">Documents</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments">ComprehendDocumentClassifierInputDataConfigDocuments</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#documents ComprehendDocumentClassifier#documents}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documentType">DocumentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.labelDelimiter">LabelDelimiter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.testS3Uri">TestS3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}. |

---

##### `AugmentedManifests`<sup>Optional</sup> <a name="AugmentedManifests" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.augmentedManifests"></a>

```go
AugmentedManifests interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#augmented_manifests ComprehendDocumentClassifier#augmented_manifests}.

---

##### `DataFormat`<sup>Optional</sup> <a name="DataFormat" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.dataFormat"></a>

```go
DataFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#data_format ComprehendDocumentClassifier#data_format}.

---

##### `DocumentReaderConfig`<sup>Optional</sup> <a name="DocumentReaderConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documentReaderConfig"></a>

```go
DocumentReaderConfig ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#document_reader_config ComprehendDocumentClassifier#document_reader_config}.

---

##### `Documents`<sup>Optional</sup> <a name="Documents" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documents"></a>

```go
Documents ComprehendDocumentClassifierInputDataConfigDocuments
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments">ComprehendDocumentClassifierInputDataConfigDocuments</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#documents ComprehendDocumentClassifier#documents}.

---

##### `DocumentType`<sup>Optional</sup> <a name="DocumentType" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.documentType"></a>

```go
DocumentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#document_type ComprehendDocumentClassifier#document_type}.

---

##### `LabelDelimiter`<sup>Optional</sup> <a name="LabelDelimiter" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.labelDelimiter"></a>

```go
LabelDelimiter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#label_delimiter ComprehendDocumentClassifier#label_delimiter}.

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `TestS3Uri`<sup>Optional</sup> <a name="TestS3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfig.property.testS3Uri"></a>

```go
TestS3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}.

---

### ComprehendDocumentClassifierInputDataConfigAugmentedManifests <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifests" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests {
	AttributeNames: *[]*string,
	S3Uri: *string,
	Split: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.attributeNames">AttributeNames</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.split">Split</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#split ComprehendDocumentClassifier#split}. |

---

##### `AttributeNames`<sup>Optional</sup> <a name="AttributeNames" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.attributeNames"></a>

```go
AttributeNames *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#attribute_names ComprehendDocumentClassifier#attribute_names}.

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `Split`<sup>Optional</sup> <a name="Split" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifests.property.split"></a>

```go
Split *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#split ComprehendDocumentClassifier#split}.

---

### ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig <a name="ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig {
	DocumentReadAction: *string,
	DocumentReadMode: *string,
	FeatureTypes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.documentReadAction">DocumentReadAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#document_read_action ComprehendDocumentClassifier#document_read_action}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.documentReadMode">DocumentReadMode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#document_read_mode ComprehendDocumentClassifier#document_read_mode}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.featureTypes">FeatureTypes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#feature_types ComprehendDocumentClassifier#feature_types}. |

---

##### `DocumentReadAction`<sup>Optional</sup> <a name="DocumentReadAction" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.documentReadAction"></a>

```go
DocumentReadAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#document_read_action ComprehendDocumentClassifier#document_read_action}.

---

##### `DocumentReadMode`<sup>Optional</sup> <a name="DocumentReadMode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.documentReadMode"></a>

```go
DocumentReadMode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#document_read_mode ComprehendDocumentClassifier#document_read_mode}.

---

##### `FeatureTypes`<sup>Optional</sup> <a name="FeatureTypes" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig.property.featureTypes"></a>

```go
FeatureTypes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#feature_types ComprehendDocumentClassifier#feature_types}.

---

### ComprehendDocumentClassifierInputDataConfigDocuments <a name="ComprehendDocumentClassifierInputDataConfigDocuments" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierInputDataConfigDocuments {
	S3Uri: *string,
	TestS3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments.property.testS3Uri">TestS3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}. |

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

##### `TestS3Uri`<sup>Optional</sup> <a name="TestS3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments.property.testS3Uri"></a>

```go
TestS3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#test_s3_uri ComprehendDocumentClassifier#test_s3_uri}.

---

### ComprehendDocumentClassifierOutputDataConfig <a name="ComprehendDocumentClassifierOutputDataConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierOutputDataConfig {
	KmsKeyId: *string,
	S3Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.s3Uri">S3Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#kms_key_id ComprehendDocumentClassifier#kms_key_id}.

---

##### `S3Uri`<sup>Optional</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfig.property.s3Uri"></a>

```go
S3Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#s3_uri ComprehendDocumentClassifier#s3_uri}.

---

### ComprehendDocumentClassifierTags <a name="ComprehendDocumentClassifierTags" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#key ComprehendDocumentClassifier#key}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#value ComprehendDocumentClassifier#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#key ComprehendDocumentClassifier#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#value ComprehendDocumentClassifier#value}.

---

### ComprehendDocumentClassifierVpcConfig <a name="ComprehendDocumentClassifierVpcConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

&comprehenddocumentclassifier.ComprehendDocumentClassifierVpcConfig {
	SecurityGroupIds: *[]*string,
	Subnets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.subnets">Subnets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}. |

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#security_group_ids ComprehendDocumentClassifier#security_group_ids}.

---

##### `Subnets`<sup>Optional</sup> <a name="Subnets" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfig.property.subnets"></a>

```go
Subnets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/comprehend_document_classifier#subnets ComprehendDocumentClassifier#subnets}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierInputDataConfigAugmentedManifestsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get"></a>

```go
func Get(index *f64) ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference <a name="ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetAttributeNames">ResetAttributeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSplit">ResetSplit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttributeNames` <a name="ResetAttributeNames" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetAttributeNames"></a>

```go
func ResetAttributeNames()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```

##### `ResetSplit` <a name="ResetSplit" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.resetSplit"></a>

```go
func ResetSplit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput">AttributeNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.splitInput">SplitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames">AttributeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split">Split</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeNamesInput`<sup>Optional</sup> <a name="AttributeNamesInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNamesInput"></a>

```go
func AttributeNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `SplitInput`<sup>Optional</sup> <a name="SplitInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.splitInput"></a>

```go
func SplitInput() *string
```

- *Type:* *string

---

##### `AttributeNames`<sup>Required</sup> <a name="AttributeNames" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.attributeNames"></a>

```go
func AttributeNames() *[]*string
```

- *Type:* *[]*string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `Split`<sup>Required</sup> <a name="Split" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.split"></a>

```go
func Split() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference <a name="ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetDocumentReadAction">ResetDocumentReadAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetDocumentReadMode">ResetDocumentReadMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetFeatureTypes">ResetFeatureTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDocumentReadAction` <a name="ResetDocumentReadAction" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetDocumentReadAction"></a>

```go
func ResetDocumentReadAction()
```

##### `ResetDocumentReadMode` <a name="ResetDocumentReadMode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetDocumentReadMode"></a>

```go
func ResetDocumentReadMode()
```

##### `ResetFeatureTypes` <a name="ResetFeatureTypes" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.resetFeatureTypes"></a>

```go
func ResetFeatureTypes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadActionInput">DocumentReadActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadModeInput">DocumentReadModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.featureTypesInput">FeatureTypesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadAction">DocumentReadAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadMode">DocumentReadMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.featureTypes">FeatureTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DocumentReadActionInput`<sup>Optional</sup> <a name="DocumentReadActionInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadActionInput"></a>

```go
func DocumentReadActionInput() *string
```

- *Type:* *string

---

##### `DocumentReadModeInput`<sup>Optional</sup> <a name="DocumentReadModeInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadModeInput"></a>

```go
func DocumentReadModeInput() *string
```

- *Type:* *string

---

##### `FeatureTypesInput`<sup>Optional</sup> <a name="FeatureTypesInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.featureTypesInput"></a>

```go
func FeatureTypesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DocumentReadAction`<sup>Required</sup> <a name="DocumentReadAction" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadAction"></a>

```go
func DocumentReadAction() *string
```

- *Type:* *string

---

##### `DocumentReadMode`<sup>Required</sup> <a name="DocumentReadMode" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.documentReadMode"></a>

```go
func DocumentReadMode() *string
```

- *Type:* *string

---

##### `FeatureTypes`<sup>Required</sup> <a name="FeatureTypes" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.featureTypes"></a>

```go
func FeatureTypes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference <a name="ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierInputDataConfigDocumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resetTestS3Uri">ResetTestS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```

##### `ResetTestS3Uri` <a name="ResetTestS3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.resetTestS3Uri"></a>

```go
func ResetTestS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.testS3UriInput">TestS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.testS3Uri">TestS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `TestS3UriInput`<sup>Optional</sup> <a name="TestS3UriInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.testS3UriInput"></a>

```go
func TestS3UriInput() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `TestS3Uri`<sup>Required</sup> <a name="TestS3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.testS3Uri"></a>

```go
func TestS3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendDocumentClassifierInputDataConfigOutputReference <a name="ComprehendDocumentClassifierInputDataConfigOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierInputDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendDocumentClassifierInputDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests">PutAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocumentReaderConfig">PutDocumentReaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocuments">PutDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetAugmentedManifests">ResetAugmentedManifests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDataFormat">ResetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocumentReaderConfig">ResetDocumentReaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocuments">ResetDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocumentType">ResetDocumentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetLabelDelimiter">ResetLabelDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetTestS3Uri">ResetTestS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAugmentedManifests` <a name="PutAugmentedManifests" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests"></a>

```go
func PutAugmentedManifests(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putAugmentedManifests.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDocumentReaderConfig` <a name="PutDocumentReaderConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocumentReaderConfig"></a>

```go
func PutDocumentReaderConfig(value ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocumentReaderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfig</a>

---

##### `PutDocuments` <a name="PutDocuments" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocuments"></a>

```go
func PutDocuments(value ComprehendDocumentClassifierInputDataConfigDocuments)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.putDocuments.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocuments">ComprehendDocumentClassifierInputDataConfigDocuments</a>

---

##### `ResetAugmentedManifests` <a name="ResetAugmentedManifests" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetAugmentedManifests"></a>

```go
func ResetAugmentedManifests()
```

##### `ResetDataFormat` <a name="ResetDataFormat" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDataFormat"></a>

```go
func ResetDataFormat()
```

##### `ResetDocumentReaderConfig` <a name="ResetDocumentReaderConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocumentReaderConfig"></a>

```go
func ResetDocumentReaderConfig()
```

##### `ResetDocuments` <a name="ResetDocuments" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocuments"></a>

```go
func ResetDocuments()
```

##### `ResetDocumentType` <a name="ResetDocumentType" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetDocumentType"></a>

```go
func ResetDocumentType()
```

##### `ResetLabelDelimiter` <a name="ResetLabelDelimiter" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetLabelDelimiter"></a>

```go
func ResetLabelDelimiter()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```

##### `ResetTestS3Uri` <a name="ResetTestS3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.resetTestS3Uri"></a>

```go
func ResetTestS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests">AugmentedManifests</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentReaderConfig">DocumentReaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documents">Documents</a></code> | <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference">ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifestsInput">AugmentedManifestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormatInput">DataFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentReaderConfigInput">DocumentReaderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentsInput">DocumentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentTypeInput">DocumentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiterInput">LabelDelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3UriInput">TestS3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat">DataFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentType">DocumentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter">LabelDelimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri">TestS3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AugmentedManifests`<sup>Required</sup> <a name="AugmentedManifests" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifests"></a>

```go
func AugmentedManifests() ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList">ComprehendDocumentClassifierInputDataConfigAugmentedManifestsList</a>

---

##### `DocumentReaderConfig`<sup>Required</sup> <a name="DocumentReaderConfig" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentReaderConfig"></a>

```go
func DocumentReaderConfig() ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference">ComprehendDocumentClassifierInputDataConfigDocumentReaderConfigOutputReference</a>

---

##### `Documents`<sup>Required</sup> <a name="Documents" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documents"></a>

```go
func Documents() ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference">ComprehendDocumentClassifierInputDataConfigDocumentsOutputReference</a>

---

##### `AugmentedManifestsInput`<sup>Optional</sup> <a name="AugmentedManifestsInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.augmentedManifestsInput"></a>

```go
func AugmentedManifestsInput() interface{}
```

- *Type:* interface{}

---

##### `DataFormatInput`<sup>Optional</sup> <a name="DataFormatInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormatInput"></a>

```go
func DataFormatInput() *string
```

- *Type:* *string

---

##### `DocumentReaderConfigInput`<sup>Optional</sup> <a name="DocumentReaderConfigInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentReaderConfigInput"></a>

```go
func DocumentReaderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `DocumentsInput`<sup>Optional</sup> <a name="DocumentsInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentsInput"></a>

```go
func DocumentsInput() interface{}
```

- *Type:* interface{}

---

##### `DocumentTypeInput`<sup>Optional</sup> <a name="DocumentTypeInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentTypeInput"></a>

```go
func DocumentTypeInput() *string
```

- *Type:* *string

---

##### `LabelDelimiterInput`<sup>Optional</sup> <a name="LabelDelimiterInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiterInput"></a>

```go
func LabelDelimiterInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `TestS3UriInput`<sup>Optional</sup> <a name="TestS3UriInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3UriInput"></a>

```go
func TestS3UriInput() *string
```

- *Type:* *string

---

##### `DataFormat`<sup>Required</sup> <a name="DataFormat" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.dataFormat"></a>

```go
func DataFormat() *string
```

- *Type:* *string

---

##### `DocumentType`<sup>Required</sup> <a name="DocumentType" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.documentType"></a>

```go
func DocumentType() *string
```

- *Type:* *string

---

##### `LabelDelimiter`<sup>Required</sup> <a name="LabelDelimiter" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.labelDelimiter"></a>

```go
func LabelDelimiter() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `TestS3Uri`<sup>Required</sup> <a name="TestS3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.testS3Uri"></a>

```go
func TestS3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierInputDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendDocumentClassifierOutputDataConfigOutputReference <a name="ComprehendDocumentClassifierOutputDataConfigOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierOutputDataConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendDocumentClassifierOutputDataConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetS3Uri">ResetS3Uri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetS3Uri` <a name="ResetS3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.resetS3Uri"></a>

```go
func ResetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3UriInput">S3UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri">S3Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `S3UriInput`<sup>Optional</sup> <a name="S3UriInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3UriInput"></a>

```go
func S3UriInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `S3Uri`<sup>Required</sup> <a name="S3Uri" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.s3Uri"></a>

```go
func S3Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierOutputDataConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendDocumentClassifierTagsList <a name="ComprehendDocumentClassifierTagsList" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComprehendDocumentClassifierTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.get"></a>

```go
func Get(index *f64) ComprehendDocumentClassifierTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendDocumentClassifierTagsOutputReference <a name="ComprehendDocumentClassifierTagsOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComprehendDocumentClassifierTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComprehendDocumentClassifierVpcConfigOutputReference <a name="ComprehendDocumentClassifierVpcConfigOutputReference" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/comprehenddocumentclassifier"

comprehenddocumentclassifier.NewComprehendDocumentClassifierVpcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComprehendDocumentClassifierVpcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resetSubnets">ResetSubnets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetSubnets` <a name="ResetSubnets" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.resetSubnets"></a>

```go
func ResetSubnets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnetsInput">SubnetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnets">Subnets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetsInput`<sup>Optional</sup> <a name="SubnetsInput" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnetsInput"></a>

```go
func SubnetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Subnets`<sup>Required</sup> <a name="Subnets" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.subnets"></a>

```go
func Subnets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.comprehendDocumentClassifier.ComprehendDocumentClassifierVpcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



