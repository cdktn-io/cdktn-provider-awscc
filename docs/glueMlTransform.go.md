# `glueMlTransform` Submodule <a name="`glueMlTransform` Submodule" id="@cdktn/provider-awscc.glueMlTransform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueMlTransform <a name="GlueMlTransform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform awscc_glue_ml_transform}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.NewGlueMlTransform(scope Construct, id *string, config GlueMlTransformConfig) GlueMlTransform
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig">GlueMlTransformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables">PutInputRecordTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption">PutTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters">PutTransformParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetGlueVersion">ResetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxCapacity">ResetMaxCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetNumberOfWorkers">ResetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTransformEncryption">ResetTransformEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInputRecordTables` <a name="PutInputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables"></a>

```go
func PutInputRecordTables(value GlueMlTransformInputRecordTables)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putInputRecordTables.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

---

##### `PutTransformEncryption` <a name="PutTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption"></a>

```go
func PutTransformEncryption(value GlueMlTransformTransformEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

---

##### `PutTransformParameters` <a name="PutTransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters"></a>

```go
func PutTransformParameters(value GlueMlTransformTransformParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.putTransformParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGlueVersion` <a name="ResetGlueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetGlueVersion"></a>

```go
func ResetGlueVersion()
```

##### `ResetMaxCapacity` <a name="ResetMaxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxCapacity"></a>

```go
func ResetMaxCapacity()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetName"></a>

```go
func ResetName()
```

##### `ResetNumberOfWorkers` <a name="ResetNumberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetNumberOfWorkers"></a>

```go
func ResetNumberOfWorkers()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetTransformEncryption` <a name="ResetTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetTransformEncryption"></a>

```go
func ResetTransformEncryption()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.resetWorkerType"></a>

```go
func ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a GlueMlTransform resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.GlueMlTransform_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.GlueMlTransform_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.GlueMlTransform_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.GlueMlTransform_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a GlueMlTransform resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GlueMlTransform to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GlueMlTransform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the GlueMlTransform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTables">InputRecordTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference">GlueMlTransformInputRecordTablesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryption">TransformEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference">GlueMlTransformTransformEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformId">TransformId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParameters">TransformParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference">GlueMlTransformTransformParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersionInput">GlueVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput">InputRecordTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacityInput">MaxCapacityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput">NumberOfWorkersInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryptionInput">TransformEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParametersInput">TransformParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerTypeInput">WorkerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersion">GlueVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerType">WorkerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputRecordTables`<sup>Required</sup> <a name="InputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTables"></a>

```go
func InputRecordTables() GlueMlTransformInputRecordTablesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference">GlueMlTransformInputRecordTablesOutputReference</a>

---

##### `TransformEncryption`<sup>Required</sup> <a name="TransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryption"></a>

```go
func TransformEncryption() GlueMlTransformTransformEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference">GlueMlTransformTransformEncryptionOutputReference</a>

---

##### `TransformId`<sup>Required</sup> <a name="TransformId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformId"></a>

```go
func TransformId() *string
```

- *Type:* *string

---

##### `TransformParameters`<sup>Required</sup> <a name="TransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParameters"></a>

```go
func TransformParameters() GlueMlTransformTransformParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference">GlueMlTransformTransformParametersOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GlueVersionInput`<sup>Optional</sup> <a name="GlueVersionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersionInput"></a>

```go
func GlueVersionInput() *string
```

- *Type:* *string

---

##### `InputRecordTablesInput`<sup>Optional</sup> <a name="InputRecordTablesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.inputRecordTablesInput"></a>

```go
func InputRecordTablesInput() interface{}
```

- *Type:* interface{}

---

##### `MaxCapacityInput`<sup>Optional</sup> <a name="MaxCapacityInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacityInput"></a>

```go
func MaxCapacityInput() *f64
```

- *Type:* *f64

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NumberOfWorkersInput`<sup>Optional</sup> <a name="NumberOfWorkersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkersInput"></a>

```go
func NumberOfWorkersInput() *f64
```

- *Type:* *f64

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TransformEncryptionInput`<sup>Optional</sup> <a name="TransformEncryptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformEncryptionInput"></a>

```go
func TransformEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `TransformParametersInput`<sup>Optional</sup> <a name="TransformParametersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.transformParametersInput"></a>

```go
func TransformParametersInput() interface{}
```

- *Type:* interface{}

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerTypeInput"></a>

```go
func WorkerTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GlueVersion`<sup>Required</sup> <a name="GlueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.glueVersion"></a>

```go
func GlueVersion() *string
```

- *Type:* *string

---

##### `MaxCapacity`<sup>Required</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxCapacity"></a>

```go
func MaxCapacity() *f64
```

- *Type:* *f64

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NumberOfWorkers`<sup>Required</sup> <a name="NumberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.numberOfWorkers"></a>

```go
func NumberOfWorkers() *f64
```

- *Type:* *f64

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.workerType"></a>

```go
func WorkerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransform.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueMlTransformConfig <a name="GlueMlTransformConfig" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

&gluemltransform.GlueMlTransformConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	InputRecordTables: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueMlTransform.GlueMlTransformInputRecordTables,
	Role: *string,
	TransformParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueMlTransform.GlueMlTransformTransformParameters,
	Description: *string,
	GlueVersion: *string,
	MaxCapacity: *f64,
	MaxRetries: *f64,
	Name: *string,
	NumberOfWorkers: *f64,
	Tags: *map[string]*string,
	Timeout: *f64,
	TransformEncryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueMlTransform.GlueMlTransformTransformEncryption,
	WorkerType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables">InputRecordTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a></code> | A list of AWS Glue table definitions used by the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.role">Role</a></code> | <code>*string</code> | The name or ARN of the IAM role with the required permissions. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformParameters">TransformParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a></code> | The algorithm-specific parameters that are associated with the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.description">Description</a></code> | <code>*string</code> | A user-defined, long-form description text for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.glueVersion">GlueVersion</a></code> | <code>*string</code> | The version of AWS Glue this machine learning transform is compatible with. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxCapacity">MaxCapacity</a></code> | <code>*f64</code> | The number of AWS Glue DPUs allocated to task runs for this transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | The maximum number of times to retry after an MLTaskRun fails. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.name">Name</a></code> | <code>*string</code> | A user-defined name for the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers">NumberOfWorkers</a></code> | <code>*f64</code> | The number of workers of a defined workerType that are allocated when a task runs. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | The tags to use with this machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.timeout">Timeout</a></code> | <code>*f64</code> | The timeout in minutes of the machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformEncryption">TransformEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a></code> | The encryption-at-rest settings of the transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.workerType">WorkerType</a></code> | <code>*string</code> | The type of predefined worker that is allocated when a task runs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InputRecordTables`<sup>Required</sup> <a name="InputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.inputRecordTables"></a>

```go
InputRecordTables GlueMlTransformInputRecordTables
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables">GlueMlTransformInputRecordTables</a>

A list of AWS Glue table definitions used by the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#input_record_tables GlueMlTransform#input_record_tables}

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

The name or ARN of the IAM role with the required permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#role GlueMlTransform#role}

---

##### `TransformParameters`<sup>Required</sup> <a name="TransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformParameters"></a>

```go
TransformParameters GlueMlTransformTransformParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters">GlueMlTransformTransformParameters</a>

The algorithm-specific parameters that are associated with the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#transform_parameters GlueMlTransform#transform_parameters}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A user-defined, long-form description text for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#description GlueMlTransform#description}

---

##### `GlueVersion`<sup>Optional</sup> <a name="GlueVersion" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.glueVersion"></a>

```go
GlueVersion *string
```

- *Type:* *string

The version of AWS Glue this machine learning transform is compatible with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#glue_version GlueMlTransform#glue_version}

---

##### `MaxCapacity`<sup>Optional</sup> <a name="MaxCapacity" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxCapacity"></a>

```go
MaxCapacity *f64
```

- *Type:* *f64

The number of AWS Glue DPUs allocated to task runs for this transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#max_capacity GlueMlTransform#max_capacity}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

The maximum number of times to retry after an MLTaskRun fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#max_retries GlueMlTransform#max_retries}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A user-defined name for the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#name GlueMlTransform#name}

---

##### `NumberOfWorkers`<sup>Optional</sup> <a name="NumberOfWorkers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.numberOfWorkers"></a>

```go
NumberOfWorkers *f64
```

- *Type:* *f64

The number of workers of a defined workerType that are allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#number_of_workers GlueMlTransform#number_of_workers}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

The tags to use with this machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#tags GlueMlTransform#tags}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

The timeout in minutes of the machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#timeout GlueMlTransform#timeout}

---

##### `TransformEncryption`<sup>Optional</sup> <a name="TransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.transformEncryption"></a>

```go
TransformEncryption GlueMlTransformTransformEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption">GlueMlTransformTransformEncryption</a>

The encryption-at-rest settings of the transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#transform_encryption GlueMlTransform#transform_encryption}

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformConfig.property.workerType"></a>

```go
WorkerType *string
```

- *Type:* *string

The type of predefined worker that is allocated when a task runs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#worker_type GlueMlTransform#worker_type}

---

### GlueMlTransformInputRecordTables <a name="GlueMlTransformInputRecordTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

&gluemltransform.GlueMlTransformInputRecordTables {
	GlueTables: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.property.glueTables">GlueTables</a></code> | <code>interface{}</code> | The database and table in the AWS Glue Data Catalog that is used for input or output data. |

---

##### `GlueTables`<sup>Optional</sup> <a name="GlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTables.property.glueTables"></a>

```go
GlueTables interface{}
```

- *Type:* interface{}

The database and table in the AWS Glue Data Catalog that is used for input or output data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#glue_tables GlueMlTransform#glue_tables}

---

### GlueMlTransformInputRecordTablesGlueTables <a name="GlueMlTransformInputRecordTablesGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

&gluemltransform.GlueMlTransformInputRecordTablesGlueTables {
	CatalogId: *string,
	ConnectionName: *string,
	DatabaseName: *string,
	TableName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.catalogId">CatalogId</a></code> | <code>*string</code> | A unique identifier for the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.connectionName">ConnectionName</a></code> | <code>*string</code> | The name of the connection to the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.databaseName">DatabaseName</a></code> | <code>*string</code> | A database name in the AWS Glue Data Catalog. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.tableName">TableName</a></code> | <code>*string</code> | A table name in the AWS Glue Data Catalog. |

---

##### `CatalogId`<sup>Optional</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.catalogId"></a>

```go
CatalogId *string
```

- *Type:* *string

A unique identifier for the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#catalog_id GlueMlTransform#catalog_id}

---

##### `ConnectionName`<sup>Optional</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.connectionName"></a>

```go
ConnectionName *string
```

- *Type:* *string

The name of the connection to the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#connection_name GlueMlTransform#connection_name}

---

##### `DatabaseName`<sup>Optional</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.databaseName"></a>

```go
DatabaseName *string
```

- *Type:* *string

A database name in the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#database_name GlueMlTransform#database_name}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTables.property.tableName"></a>

```go
TableName *string
```

- *Type:* *string

A table name in the AWS Glue Data Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#table_name GlueMlTransform#table_name}

---

### GlueMlTransformTransformEncryption <a name="GlueMlTransformTransformEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

&gluemltransform.GlueMlTransformTransformEncryption {
	MlUserDataEncryption: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption,
	TaskRunSecurityConfigurationName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.mlUserDataEncryption">MlUserDataEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a></code> | The encryption-at-rest settings of the transform that apply to accessing user data. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.taskRunSecurityConfigurationName">TaskRunSecurityConfigurationName</a></code> | <code>*string</code> | The name of the security configuration. |

---

##### `MlUserDataEncryption`<sup>Optional</sup> <a name="MlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.mlUserDataEncryption"></a>

```go
MlUserDataEncryption GlueMlTransformTransformEncryptionMlUserDataEncryption
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

The encryption-at-rest settings of the transform that apply to accessing user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#ml_user_data_encryption GlueMlTransform#ml_user_data_encryption}

---

##### `TaskRunSecurityConfigurationName`<sup>Optional</sup> <a name="TaskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryption.property.taskRunSecurityConfigurationName"></a>

```go
TaskRunSecurityConfigurationName *string
```

- *Type:* *string

The name of the security configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#task_run_security_configuration_name GlueMlTransform#task_run_security_configuration_name}

---

### GlueMlTransformTransformEncryptionMlUserDataEncryption <a name="GlueMlTransformTransformEncryptionMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

&gluemltransform.GlueMlTransformTransformEncryptionMlUserDataEncryption {
	KmsKeyId: *string,
	MlUserDataEncryptionMode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The ID for the customer-provided KMS key. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.mlUserDataEncryptionMode">MlUserDataEncryptionMode</a></code> | <code>*string</code> | The encryption mode applied to user data. |

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The ID for the customer-provided KMS key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#kms_key_id GlueMlTransform#kms_key_id}

---

##### `MlUserDataEncryptionMode`<sup>Optional</sup> <a name="MlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption.property.mlUserDataEncryptionMode"></a>

```go
MlUserDataEncryptionMode *string
```

- *Type:* *string

The encryption mode applied to user data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#ml_user_data_encryption_mode GlueMlTransform#ml_user_data_encryption_mode}

---

### GlueMlTransformTransformParameters <a name="GlueMlTransformTransformParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

&gluemltransform.GlueMlTransformTransformParameters {
	TransformType: *string,
	FindMatchesParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.transformType">TransformType</a></code> | <code>*string</code> | The type of machine learning transform. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.findMatchesParameters">FindMatchesParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a></code> | The parameters to configure the find matches transform. |

---

##### `TransformType`<sup>Required</sup> <a name="TransformType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.transformType"></a>

```go
TransformType *string
```

- *Type:* *string

The type of machine learning transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#transform_type GlueMlTransform#transform_type}

---

##### `FindMatchesParameters`<sup>Optional</sup> <a name="FindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParameters.property.findMatchesParameters"></a>

```go
FindMatchesParameters GlueMlTransformTransformParametersFindMatchesParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

The parameters to configure the find matches transform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#find_matches_parameters GlueMlTransform#find_matches_parameters}

---

### GlueMlTransformTransformParametersFindMatchesParameters <a name="GlueMlTransformTransformParametersFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

&gluemltransform.GlueMlTransformTransformParametersFindMatchesParameters {
	AccuracyCostTradeoff: *f64,
	EnforceProvidedLabels: interface{},
	PrecisionRecallTradeoff: *f64,
	PrimaryKeyColumnName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.accuracyCostTradeoff">AccuracyCostTradeoff</a></code> | <code>*f64</code> | The value for accuracy and cost tradeoff. A value of 0.5 means balance. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.enforceProvidedLabels">EnforceProvidedLabels</a></code> | <code>interface{}</code> | If true, forces the output to match the provided labels. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.precisionRecallTradeoff">PrecisionRecallTradeoff</a></code> | <code>*f64</code> | The value for precision and recall tradeoff. A value of 0.5 means no preference. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.primaryKeyColumnName">PrimaryKeyColumnName</a></code> | <code>*string</code> | The name of a column that uniquely identifies rows in the source table. |

---

##### `AccuracyCostTradeoff`<sup>Optional</sup> <a name="AccuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.accuracyCostTradeoff"></a>

```go
AccuracyCostTradeoff *f64
```

- *Type:* *f64

The value for accuracy and cost tradeoff. A value of 0.5 means balance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#accuracy_cost_tradeoff GlueMlTransform#accuracy_cost_tradeoff}

---

##### `EnforceProvidedLabels`<sup>Optional</sup> <a name="EnforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.enforceProvidedLabels"></a>

```go
EnforceProvidedLabels interface{}
```

- *Type:* interface{}

If true, forces the output to match the provided labels.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#enforce_provided_labels GlueMlTransform#enforce_provided_labels}

---

##### `PrecisionRecallTradeoff`<sup>Optional</sup> <a name="PrecisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.precisionRecallTradeoff"></a>

```go
PrecisionRecallTradeoff *f64
```

- *Type:* *f64

The value for precision and recall tradeoff. A value of 0.5 means no preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#precision_recall_tradeoff GlueMlTransform#precision_recall_tradeoff}

---

##### `PrimaryKeyColumnName`<sup>Optional</sup> <a name="PrimaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters.property.primaryKeyColumnName"></a>

```go
PrimaryKeyColumnName *string
```

- *Type:* *string

The name of a column that uniquely identifies rows in the source table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/glue_ml_transform#primary_key_column_name GlueMlTransform#primary_key_column_name}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueMlTransformInputRecordTablesGlueTablesList <a name="GlueMlTransformInputRecordTablesGlueTablesList" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.NewGlueMlTransformInputRecordTablesGlueTablesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GlueMlTransformInputRecordTablesGlueTablesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get"></a>

```go
func Get(index *f64) GlueMlTransformInputRecordTablesGlueTablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueMlTransformInputRecordTablesGlueTablesOutputReference <a name="GlueMlTransformInputRecordTablesGlueTablesOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.NewGlueMlTransformInputRecordTablesGlueTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GlueMlTransformInputRecordTablesGlueTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetCatalogId">ResetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetConnectionName">ResetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetDatabaseName">ResetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCatalogId` <a name="ResetCatalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetCatalogId"></a>

```go
func ResetCatalogId()
```

##### `ResetConnectionName` <a name="ResetConnectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetConnectionName"></a>

```go
func ResetConnectionName()
```

##### `ResetDatabaseName` <a name="ResetDatabaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetDatabaseName"></a>

```go
func ResetDatabaseName()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.resetTableName"></a>

```go
func ResetTableName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogIdInput">CatalogIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionNameInput">ConnectionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseNameInput">DatabaseNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId">CatalogId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName">ConnectionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName">DatabaseName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName">TableName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CatalogIdInput`<sup>Optional</sup> <a name="CatalogIdInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogIdInput"></a>

```go
func CatalogIdInput() *string
```

- *Type:* *string

---

##### `ConnectionNameInput`<sup>Optional</sup> <a name="ConnectionNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionNameInput"></a>

```go
func ConnectionNameInput() *string
```

- *Type:* *string

---

##### `DatabaseNameInput`<sup>Optional</sup> <a name="DatabaseNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseNameInput"></a>

```go
func DatabaseNameInput() *string
```

- *Type:* *string

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableNameInput"></a>

```go
func TableNameInput() *string
```

- *Type:* *string

---

##### `CatalogId`<sup>Required</sup> <a name="CatalogId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.catalogId"></a>

```go
func CatalogId() *string
```

- *Type:* *string

---

##### `ConnectionName`<sup>Required</sup> <a name="ConnectionName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.connectionName"></a>

```go
func ConnectionName() *string
```

- *Type:* *string

---

##### `DatabaseName`<sup>Required</sup> <a name="DatabaseName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.databaseName"></a>

```go
func DatabaseName() *string
```

- *Type:* *string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.tableName"></a>

```go
func TableName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueMlTransformInputRecordTablesOutputReference <a name="GlueMlTransformInputRecordTablesOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.NewGlueMlTransformInputRecordTablesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueMlTransformInputRecordTablesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables">PutGlueTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetGlueTables">ResetGlueTables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGlueTables` <a name="PutGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables"></a>

```go
func PutGlueTables(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.putGlueTables.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGlueTables` <a name="ResetGlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.resetGlueTables"></a>

```go
func ResetGlueTables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTables">GlueTables</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList">GlueMlTransformInputRecordTablesGlueTablesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTablesInput">GlueTablesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GlueTables`<sup>Required</sup> <a name="GlueTables" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTables"></a>

```go
func GlueTables() GlueMlTransformInputRecordTablesGlueTablesList
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesGlueTablesList">GlueMlTransformInputRecordTablesGlueTablesList</a>

---

##### `GlueTablesInput`<sup>Optional</sup> <a name="GlueTablesInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.glueTablesInput"></a>

```go
func GlueTablesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformInputRecordTablesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference <a name="GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.NewGlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetMlUserDataEncryptionMode">ResetMlUserDataEncryptionMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetMlUserDataEncryptionMode` <a name="ResetMlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.resetMlUserDataEncryptionMode"></a>

```go
func ResetMlUserDataEncryptionMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionModeInput">MlUserDataEncryptionModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode">MlUserDataEncryptionMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `MlUserDataEncryptionModeInput`<sup>Optional</sup> <a name="MlUserDataEncryptionModeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionModeInput"></a>

```go
func MlUserDataEncryptionModeInput() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `MlUserDataEncryptionMode`<sup>Required</sup> <a name="MlUserDataEncryptionMode" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.mlUserDataEncryptionMode"></a>

```go
func MlUserDataEncryptionMode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueMlTransformTransformEncryptionOutputReference <a name="GlueMlTransformTransformEncryptionOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.NewGlueMlTransformTransformEncryptionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueMlTransformTransformEncryptionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption">PutMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetMlUserDataEncryption">ResetMlUserDataEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetTaskRunSecurityConfigurationName">ResetTaskRunSecurityConfigurationName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMlUserDataEncryption` <a name="PutMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption"></a>

```go
func PutMlUserDataEncryption(value GlueMlTransformTransformEncryptionMlUserDataEncryption)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.putMlUserDataEncryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryption">GlueMlTransformTransformEncryptionMlUserDataEncryption</a>

---

##### `ResetMlUserDataEncryption` <a name="ResetMlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetMlUserDataEncryption"></a>

```go
func ResetMlUserDataEncryption()
```

##### `ResetTaskRunSecurityConfigurationName` <a name="ResetTaskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.resetTaskRunSecurityConfigurationName"></a>

```go
func ResetTaskRunSecurityConfigurationName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption">MlUserDataEncryption</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryptionInput">MlUserDataEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationNameInput">TaskRunSecurityConfigurationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName">TaskRunSecurityConfigurationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MlUserDataEncryption`<sup>Required</sup> <a name="MlUserDataEncryption" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryption"></a>

```go
func MlUserDataEncryption() GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference">GlueMlTransformTransformEncryptionMlUserDataEncryptionOutputReference</a>

---

##### `MlUserDataEncryptionInput`<sup>Optional</sup> <a name="MlUserDataEncryptionInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.mlUserDataEncryptionInput"></a>

```go
func MlUserDataEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `TaskRunSecurityConfigurationNameInput`<sup>Optional</sup> <a name="TaskRunSecurityConfigurationNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationNameInput"></a>

```go
func TaskRunSecurityConfigurationNameInput() *string
```

- *Type:* *string

---

##### `TaskRunSecurityConfigurationName`<sup>Required</sup> <a name="TaskRunSecurityConfigurationName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.taskRunSecurityConfigurationName"></a>

```go
func TaskRunSecurityConfigurationName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformEncryptionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueMlTransformTransformParametersFindMatchesParametersOutputReference <a name="GlueMlTransformTransformParametersFindMatchesParametersOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.NewGlueMlTransformTransformParametersFindMatchesParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueMlTransformTransformParametersFindMatchesParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeoff">ResetAccuracyCostTradeoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels">ResetEnforceProvidedLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeoff">ResetPrecisionRecallTradeoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName">ResetPrimaryKeyColumnName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccuracyCostTradeoff` <a name="ResetAccuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetAccuracyCostTradeoff"></a>

```go
func ResetAccuracyCostTradeoff()
```

##### `ResetEnforceProvidedLabels` <a name="ResetEnforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetEnforceProvidedLabels"></a>

```go
func ResetEnforceProvidedLabels()
```

##### `ResetPrecisionRecallTradeoff` <a name="ResetPrecisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrecisionRecallTradeoff"></a>

```go
func ResetPrecisionRecallTradeoff()
```

##### `ResetPrimaryKeyColumnName` <a name="ResetPrimaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.resetPrimaryKeyColumnName"></a>

```go
func ResetPrimaryKeyColumnName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoffInput">AccuracyCostTradeoffInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput">EnforceProvidedLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoffInput">PrecisionRecallTradeoffInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput">PrimaryKeyColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff">AccuracyCostTradeoff</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels">EnforceProvidedLabels</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff">PrecisionRecallTradeoff</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName">PrimaryKeyColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccuracyCostTradeoffInput`<sup>Optional</sup> <a name="AccuracyCostTradeoffInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoffInput"></a>

```go
func AccuracyCostTradeoffInput() *f64
```

- *Type:* *f64

---

##### `EnforceProvidedLabelsInput`<sup>Optional</sup> <a name="EnforceProvidedLabelsInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabelsInput"></a>

```go
func EnforceProvidedLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `PrecisionRecallTradeoffInput`<sup>Optional</sup> <a name="PrecisionRecallTradeoffInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoffInput"></a>

```go
func PrecisionRecallTradeoffInput() *f64
```

- *Type:* *f64

---

##### `PrimaryKeyColumnNameInput`<sup>Optional</sup> <a name="PrimaryKeyColumnNameInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnNameInput"></a>

```go
func PrimaryKeyColumnNameInput() *string
```

- *Type:* *string

---

##### `AccuracyCostTradeoff`<sup>Required</sup> <a name="AccuracyCostTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.accuracyCostTradeoff"></a>

```go
func AccuracyCostTradeoff() *f64
```

- *Type:* *f64

---

##### `EnforceProvidedLabels`<sup>Required</sup> <a name="EnforceProvidedLabels" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.enforceProvidedLabels"></a>

```go
func EnforceProvidedLabels() interface{}
```

- *Type:* interface{}

---

##### `PrecisionRecallTradeoff`<sup>Required</sup> <a name="PrecisionRecallTradeoff" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.precisionRecallTradeoff"></a>

```go
func PrecisionRecallTradeoff() *f64
```

- *Type:* *f64

---

##### `PrimaryKeyColumnName`<sup>Required</sup> <a name="PrimaryKeyColumnName" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.primaryKeyColumnName"></a>

```go
func PrimaryKeyColumnName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GlueMlTransformTransformParametersOutputReference <a name="GlueMlTransformTransformParametersOutputReference" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/gluemltransform"

gluemltransform.NewGlueMlTransformTransformParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GlueMlTransformTransformParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters">PutFindMatchesParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resetFindMatchesParameters">ResetFindMatchesParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFindMatchesParameters` <a name="PutFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters"></a>

```go
func PutFindMatchesParameters(value GlueMlTransformTransformParametersFindMatchesParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.putFindMatchesParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParameters">GlueMlTransformTransformParametersFindMatchesParameters</a>

---

##### `ResetFindMatchesParameters` <a name="ResetFindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.resetFindMatchesParameters"></a>

```go
func ResetFindMatchesParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParameters">FindMatchesParameters</a></code> | <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference">GlueMlTransformTransformParametersFindMatchesParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParametersInput">FindMatchesParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformTypeInput">TransformTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformType">TransformType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FindMatchesParameters`<sup>Required</sup> <a name="FindMatchesParameters" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParameters"></a>

```go
func FindMatchesParameters() GlueMlTransformTransformParametersFindMatchesParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersFindMatchesParametersOutputReference">GlueMlTransformTransformParametersFindMatchesParametersOutputReference</a>

---

##### `FindMatchesParametersInput`<sup>Optional</sup> <a name="FindMatchesParametersInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.findMatchesParametersInput"></a>

```go
func FindMatchesParametersInput() interface{}
```

- *Type:* interface{}

---

##### `TransformTypeInput`<sup>Optional</sup> <a name="TransformTypeInput" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformTypeInput"></a>

```go
func TransformTypeInput() *string
```

- *Type:* *string

---

##### `TransformType`<sup>Required</sup> <a name="TransformType" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.transformType"></a>

```go
func TransformType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.glueMlTransform.GlueMlTransformTransformParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



