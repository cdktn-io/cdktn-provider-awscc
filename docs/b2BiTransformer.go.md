# `b2BiTransformer` Submodule <a name="`b2BiTransformer` Submodule" id="@cdktn/provider-awscc.b2BiTransformer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### B2BiTransformer <a name="B2BiTransformer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer awscc_b2bi_transformer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformer(scope Construct, id *string, config B2BiTransformerConfig) B2BiTransformer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig">B2BiTransformerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig">B2BiTransformerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType">PutEdiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion">PutInputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping">PutMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion">PutOutputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments">PutSampleDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetEdiType">ResetEdiType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetFileFormat">ResetFileFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetInputConversion">ResetInputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMapping">ResetMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMappingTemplate">ResetMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOutputConversion">ResetOutputConversion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocument">ResetSampleDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocuments">ResetSampleDocuments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEdiType` <a name="PutEdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType"></a>

```go
func PutEdiType(value B2BiTransformerEdiType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putEdiType.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

---

##### `PutInputConversion` <a name="PutInputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion"></a>

```go
func PutInputConversion(value B2BiTransformerInputConversion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putInputConversion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

---

##### `PutMapping` <a name="PutMapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping"></a>

```go
func PutMapping(value B2BiTransformerMapping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

---

##### `PutOutputConversion` <a name="PutOutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion"></a>

```go
func PutOutputConversion(value B2BiTransformerOutputConversion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putOutputConversion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

---

##### `PutSampleDocuments` <a name="PutSampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments"></a>

```go
func PutSampleDocuments(value B2BiTransformerSampleDocuments)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putSampleDocuments.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEdiType` <a name="ResetEdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetEdiType"></a>

```go
func ResetEdiType()
```

##### `ResetFileFormat` <a name="ResetFileFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetFileFormat"></a>

```go
func ResetFileFormat()
```

##### `ResetInputConversion` <a name="ResetInputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetInputConversion"></a>

```go
func ResetInputConversion()
```

##### `ResetMapping` <a name="ResetMapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMapping"></a>

```go
func ResetMapping()
```

##### `ResetMappingTemplate` <a name="ResetMappingTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetMappingTemplate"></a>

```go
func ResetMappingTemplate()
```

##### `ResetOutputConversion` <a name="ResetOutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetOutputConversion"></a>

```go
func ResetOutputConversion()
```

##### `ResetSampleDocument` <a name="ResetSampleDocument" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocument"></a>

```go
func ResetSampleDocument()
```

##### `ResetSampleDocuments` <a name="ResetSampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetSampleDocuments"></a>

```go
func ResetSampleDocuments()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a B2BiTransformer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.B2BiTransformer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.B2BiTransformer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.B2BiTransformer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.B2BiTransformer_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a B2BiTransformer resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the B2BiTransformer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing B2BiTransformer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the B2BiTransformer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediType">EdiType</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference">B2BiTransformerEdiTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversion">InputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference">B2BiTransformerInputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mapping">Mapping</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference">B2BiTransformerMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversion">OutputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference">B2BiTransformerOutputConversionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocuments">SampleDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference">B2BiTransformerSampleDocumentsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList">B2BiTransformerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerArn">TransformerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerId">TransformerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediTypeInput">EdiTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormatInput">FileFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversionInput">InputConversionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingInput">MappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplateInput">MappingTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversionInput">OutputConversionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentInput">SampleDocumentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentsInput">SampleDocumentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormat">FileFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplate">MappingTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocument">SampleDocument</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EdiType`<sup>Required</sup> <a name="EdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediType"></a>

```go
func EdiType() B2BiTransformerEdiTypeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference">B2BiTransformerEdiTypeOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InputConversion`<sup>Required</sup> <a name="InputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversion"></a>

```go
func InputConversion() B2BiTransformerInputConversionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference">B2BiTransformerInputConversionOutputReference</a>

---

##### `Mapping`<sup>Required</sup> <a name="Mapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mapping"></a>

```go
func Mapping() B2BiTransformerMappingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference">B2BiTransformerMappingOutputReference</a>

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `OutputConversion`<sup>Required</sup> <a name="OutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversion"></a>

```go
func OutputConversion() B2BiTransformerOutputConversionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference">B2BiTransformerOutputConversionOutputReference</a>

---

##### `SampleDocuments`<sup>Required</sup> <a name="SampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocuments"></a>

```go
func SampleDocuments() B2BiTransformerSampleDocumentsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference">B2BiTransformerSampleDocumentsOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tags"></a>

```go
func Tags() B2BiTransformerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList">B2BiTransformerTagsList</a>

---

##### `TransformerArn`<sup>Required</sup> <a name="TransformerArn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerArn"></a>

```go
func TransformerArn() *string
```

- *Type:* *string

---

##### `TransformerId`<sup>Required</sup> <a name="TransformerId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.transformerId"></a>

```go
func TransformerId() *string
```

- *Type:* *string

---

##### `EdiTypeInput`<sup>Optional</sup> <a name="EdiTypeInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.ediTypeInput"></a>

```go
func EdiTypeInput() interface{}
```

- *Type:* interface{}

---

##### `FileFormatInput`<sup>Optional</sup> <a name="FileFormatInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormatInput"></a>

```go
func FileFormatInput() *string
```

- *Type:* *string

---

##### `InputConversionInput`<sup>Optional</sup> <a name="InputConversionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.inputConversionInput"></a>

```go
func InputConversionInput() interface{}
```

- *Type:* interface{}

---

##### `MappingInput`<sup>Optional</sup> <a name="MappingInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingInput"></a>

```go
func MappingInput() interface{}
```

- *Type:* interface{}

---

##### `MappingTemplateInput`<sup>Optional</sup> <a name="MappingTemplateInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplateInput"></a>

```go
func MappingTemplateInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutputConversionInput`<sup>Optional</sup> <a name="OutputConversionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.outputConversionInput"></a>

```go
func OutputConversionInput() interface{}
```

- *Type:* interface{}

---

##### `SampleDocumentInput`<sup>Optional</sup> <a name="SampleDocumentInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentInput"></a>

```go
func SampleDocumentInput() *string
```

- *Type:* *string

---

##### `SampleDocumentsInput`<sup>Optional</sup> <a name="SampleDocumentsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocumentsInput"></a>

```go
func SampleDocumentsInput() interface{}
```

- *Type:* interface{}

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `FileFormat`<sup>Required</sup> <a name="FileFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.fileFormat"></a>

```go
func FileFormat() *string
```

- *Type:* *string

---

##### `MappingTemplate`<sup>Required</sup> <a name="MappingTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.mappingTemplate"></a>

```go
func MappingTemplate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SampleDocument`<sup>Required</sup> <a name="SampleDocument" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.sampleDocument"></a>

```go
func SampleDocument() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### B2BiTransformerConfig <a name="B2BiTransformerConfig" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Status: *string,
	EdiType: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerEdiType,
	FileFormat: *string,
	InputConversion: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerInputConversion,
	Mapping: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerMapping,
	MappingTemplate: *string,
	OutputConversion: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerOutputConversion,
	SampleDocument: *string,
	SampleDocuments: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerSampleDocuments,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#name B2BiTransformer#name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#status B2BiTransformer#status}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.ediType">EdiType</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#edi_type B2BiTransformer#edi_type}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.fileFormat">FileFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#file_format B2BiTransformer#file_format}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.inputConversion">InputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#input_conversion B2BiTransformer#input_conversion}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mapping">Mapping</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#mapping B2BiTransformer#mapping}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mappingTemplate">MappingTemplate</a></code> | <code>*string</code> | This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.outputConversion">OutputConversion</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#output_conversion B2BiTransformer#output_conversion}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocument">SampleDocument</a></code> | <code>*string</code> | This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocuments">SampleDocuments</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#sample_documents B2BiTransformer#sample_documents}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#tags B2BiTransformer#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#name B2BiTransformer#name}.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#status B2BiTransformer#status}.

---

##### `EdiType`<sup>Optional</sup> <a name="EdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.ediType"></a>

```go
EdiType B2BiTransformerEdiType
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType">B2BiTransformerEdiType</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#edi_type B2BiTransformer#edi_type}.

---

##### `FileFormat`<sup>Optional</sup> <a name="FileFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.fileFormat"></a>

```go
FileFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#file_format B2BiTransformer#file_format}.

---

##### `InputConversion`<sup>Optional</sup> <a name="InputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.inputConversion"></a>

```go
InputConversion B2BiTransformerInputConversion
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion">B2BiTransformerInputConversion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#input_conversion B2BiTransformer#input_conversion}.

---

##### `Mapping`<sup>Optional</sup> <a name="Mapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mapping"></a>

```go
Mapping B2BiTransformerMapping
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping">B2BiTransformerMapping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#mapping B2BiTransformer#mapping}.

---

##### `MappingTemplate`<sup>Optional</sup> <a name="MappingTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.mappingTemplate"></a>

```go
MappingTemplate *string
```

- *Type:* *string

This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#mapping_template B2BiTransformer#mapping_template}

---

##### `OutputConversion`<sup>Optional</sup> <a name="OutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.outputConversion"></a>

```go
OutputConversion B2BiTransformerOutputConversion
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion">B2BiTransformerOutputConversion</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#output_conversion B2BiTransformer#output_conversion}.

---

##### `SampleDocument`<sup>Optional</sup> <a name="SampleDocument" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocument"></a>

```go
SampleDocument *string
```

- *Type:* *string

This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#sample_document B2BiTransformer#sample_document}

---

##### `SampleDocuments`<sup>Optional</sup> <a name="SampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.sampleDocuments"></a>

```go
SampleDocuments B2BiTransformerSampleDocuments
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments">B2BiTransformerSampleDocuments</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#sample_documents B2BiTransformer#sample_documents}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#tags B2BiTransformer#tags}.

---

### B2BiTransformerEdiType <a name="B2BiTransformerEdiType" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerEdiType {
	X12Details: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.property.x12Details">X12Details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#x12_details B2BiTransformer#x12_details}. |

---

##### `X12Details`<sup>Optional</sup> <a name="X12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiType.property.x12Details"></a>

```go
X12Details B2BiTransformerEdiTypeX12Details
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#x12_details B2BiTransformer#x12_details}.

---

### B2BiTransformerEdiTypeX12Details <a name="B2BiTransformerEdiTypeX12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerEdiTypeX12Details {
	TransactionSet: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.transactionSet">TransactionSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `TransactionSet`<sup>Optional</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.transactionSet"></a>

```go
TransactionSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerInputConversion <a name="B2BiTransformerInputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerInputConversion {
	AdvancedOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions,
	FormatOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions,
	FromFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.advancedOptions">AdvancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.fromFormat">FromFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#from_format B2BiTransformer#from_format}. |

---

##### `AdvancedOptions`<sup>Optional</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.advancedOptions"></a>

```go
AdvancedOptions B2BiTransformerInputConversionAdvancedOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}.

---

##### `FormatOptions`<sup>Optional</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.formatOptions"></a>

```go
FormatOptions B2BiTransformerInputConversionFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}.

---

##### `FromFormat`<sup>Optional</sup> <a name="FromFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversion.property.fromFormat"></a>

```go
FromFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#from_format B2BiTransformer#from_format}.

---

### B2BiTransformerInputConversionAdvancedOptions <a name="B2BiTransformerInputConversionAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerInputConversionAdvancedOptions {
	X12: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `X12`<sup>Optional</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions.property.x12"></a>

```go
X12 B2BiTransformerInputConversionAdvancedOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12 <a name="B2BiTransformerInputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerInputConversionAdvancedOptionsX12 {
	SplitOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions,
	ValidationOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.splitOptions">SplitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.validationOptions">ValidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}. |

---

##### `SplitOptions`<sup>Optional</sup> <a name="SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.splitOptions"></a>

```go
SplitOptions B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}.

---

##### `ValidationOptions`<sup>Optional</sup> <a name="ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12.property.validationOptions"></a>

```go
ValidationOptions B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions <a name="B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions {
	SplitBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.property.splitBy">SplitBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}. |

---

##### `SplitBy`<sup>Optional</sup> <a name="SplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions.property.splitBy"></a>

```go
SplitBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions {
	ValidationRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.property.validationRules">ValidationRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}. |

---

##### `ValidationRules`<sup>Optional</sup> <a name="ValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions.property.validationRules"></a>

```go
ValidationRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules {
	CodeListValidationRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule,
	ElementLengthValidationRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule,
	ElementRequirementValidationRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule">CodeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule">ElementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule">ElementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}. |

---

##### `CodeListValidationRule`<sup>Optional</sup> <a name="CodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule"></a>

```go
CodeListValidationRule B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}.

---

##### `ElementLengthValidationRule`<sup>Optional</sup> <a name="ElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule"></a>

```go
ElementLengthValidationRule B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}.

---

##### `ElementRequirementValidationRule`<sup>Optional</sup> <a name="ElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule"></a>

```go
ElementRequirementValidationRule B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule {
	CodesToAdd: *[]*string,
	CodesToRemove: *[]*string,
	ElementId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd">CodesToAdd</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove">CodesToRemove</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId">ElementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |

---

##### `CodesToAdd`<sup>Optional</sup> <a name="CodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd"></a>

```go
CodesToAdd *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}.

---

##### `CodesToRemove`<sup>Optional</sup> <a name="CodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove"></a>

```go
CodesToRemove *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}.

---

##### `ElementId`<sup>Optional</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId"></a>

```go
ElementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule {
	ElementId: *string,
	MaxLength: *f64,
	MinLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId">ElementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength">MaxLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength">MinLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}. |

---

##### `ElementId`<sup>Optional</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId"></a>

```go
ElementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength"></a>

```go
MaxLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}.

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength"></a>

```go
MinLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}.

---

### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule {
	ElementPosition: *string,
	Requirement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition">ElementPosition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement">Requirement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}. |

---

##### `ElementPosition`<sup>Optional</sup> <a name="ElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition"></a>

```go
ElementPosition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}.

---

##### `Requirement`<sup>Optional</sup> <a name="Requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement"></a>

```go
Requirement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}.

---

### B2BiTransformerInputConversionFormatOptions <a name="B2BiTransformerInputConversionFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerInputConversionFormatOptions {
	X12: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `X12`<sup>Optional</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions.property.x12"></a>

```go
X12 B2BiTransformerInputConversionFormatOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerInputConversionFormatOptionsX12 <a name="B2BiTransformerInputConversionFormatOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerInputConversionFormatOptionsX12 {
	TransactionSet: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.transactionSet">TransactionSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `TransactionSet`<sup>Optional</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.transactionSet"></a>

```go
TransactionSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerMapping <a name="B2BiTransformerMapping" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerMapping {
	Template: *string,
	TemplateLanguage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.template">Template</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#template B2BiTransformer#template}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.templateLanguage">TemplateLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#template_language B2BiTransformer#template_language}. |

---

##### `Template`<sup>Optional</sup> <a name="Template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.template"></a>

```go
Template *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#template B2BiTransformer#template}.

---

##### `TemplateLanguage`<sup>Optional</sup> <a name="TemplateLanguage" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMapping.property.templateLanguage"></a>

```go
TemplateLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#template_language B2BiTransformer#template_language}.

---

### B2BiTransformerOutputConversion <a name="B2BiTransformerOutputConversion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerOutputConversion {
	AdvancedOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions,
	FormatOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions,
	ToFormat: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.advancedOptions">AdvancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.toFormat">ToFormat</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#to_format B2BiTransformer#to_format}. |

---

##### `AdvancedOptions`<sup>Optional</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.advancedOptions"></a>

```go
AdvancedOptions B2BiTransformerOutputConversionAdvancedOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#advanced_options B2BiTransformer#advanced_options}.

---

##### `FormatOptions`<sup>Optional</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.formatOptions"></a>

```go
FormatOptions B2BiTransformerOutputConversionFormatOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#format_options B2BiTransformer#format_options}.

---

##### `ToFormat`<sup>Optional</sup> <a name="ToFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversion.property.toFormat"></a>

```go
ToFormat *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#to_format B2BiTransformer#to_format}.

---

### B2BiTransformerOutputConversionAdvancedOptions <a name="B2BiTransformerOutputConversionAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerOutputConversionAdvancedOptions {
	X12: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `X12`<sup>Optional</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions.property.x12"></a>

```go
X12 B2BiTransformerOutputConversionAdvancedOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12 <a name="B2BiTransformerOutputConversionAdvancedOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerOutputConversionAdvancedOptionsX12 {
	SplitOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions,
	ValidationOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.splitOptions">SplitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.validationOptions">ValidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}. |

---

##### `SplitOptions`<sup>Optional</sup> <a name="SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.splitOptions"></a>

```go
SplitOptions B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#split_options B2BiTransformer#split_options}.

---

##### `ValidationOptions`<sup>Optional</sup> <a name="ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12.property.validationOptions"></a>

```go
ValidationOptions B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#validation_options B2BiTransformer#validation_options}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions <a name="B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions {
	SplitBy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.property.splitBy">SplitBy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}. |

---

##### `SplitBy`<sup>Optional</sup> <a name="SplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions.property.splitBy"></a>

```go
SplitBy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#split_by B2BiTransformer#split_by}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions {
	ValidationRules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.property.validationRules">ValidationRules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}. |

---

##### `ValidationRules`<sup>Optional</sup> <a name="ValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions.property.validationRules"></a>

```go
ValidationRules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#validation_rules B2BiTransformer#validation_rules}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules {
	CodeListValidationRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule,
	ElementLengthValidationRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule,
	ElementRequirementValidationRule: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule">CodeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule">ElementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule">ElementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}. |

---

##### `CodeListValidationRule`<sup>Optional</sup> <a name="CodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.codeListValidationRule"></a>

```go
CodeListValidationRule B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#code_list_validation_rule B2BiTransformer#code_list_validation_rule}.

---

##### `ElementLengthValidationRule`<sup>Optional</sup> <a name="ElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementLengthValidationRule"></a>

```go
ElementLengthValidationRule B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_length_validation_rule B2BiTransformer#element_length_validation_rule}.

---

##### `ElementRequirementValidationRule`<sup>Optional</sup> <a name="ElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRules.property.elementRequirementValidationRule"></a>

```go
ElementRequirementValidationRule B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_requirement_validation_rule B2BiTransformer#element_requirement_validation_rule}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule {
	CodesToAdd: *[]*string,
	CodesToRemove: *[]*string,
	ElementId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd">CodesToAdd</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove">CodesToRemove</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId">ElementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |

---

##### `CodesToAdd`<sup>Optional</sup> <a name="CodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToAdd"></a>

```go
CodesToAdd *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#codes_to_add B2BiTransformer#codes_to_add}.

---

##### `CodesToRemove`<sup>Optional</sup> <a name="CodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.codesToRemove"></a>

```go
CodesToRemove *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#codes_to_remove B2BiTransformer#codes_to_remove}.

---

##### `ElementId`<sup>Optional</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule.property.elementId"></a>

```go
ElementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule {
	ElementId: *string,
	MaxLength: *f64,
	MinLength: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId">ElementId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength">MaxLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength">MinLength</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}. |

---

##### `ElementId`<sup>Optional</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.elementId"></a>

```go
ElementId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_id B2BiTransformer#element_id}.

---

##### `MaxLength`<sup>Optional</sup> <a name="MaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.maxLength"></a>

```go
MaxLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#max_length B2BiTransformer#max_length}.

---

##### `MinLength`<sup>Optional</sup> <a name="MinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule.property.minLength"></a>

```go
MinLength *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#min_length B2BiTransformer#min_length}.

---

### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule {
	ElementPosition: *string,
	Requirement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition">ElementPosition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement">Requirement</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}. |

---

##### `ElementPosition`<sup>Optional</sup> <a name="ElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.elementPosition"></a>

```go
ElementPosition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#element_position B2BiTransformer#element_position}.

---

##### `Requirement`<sup>Optional</sup> <a name="Requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule.property.requirement"></a>

```go
Requirement *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#requirement B2BiTransformer#requirement}.

---

### B2BiTransformerOutputConversionFormatOptions <a name="B2BiTransformerOutputConversionFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerOutputConversionFormatOptions {
	X12: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}. |

---

##### `X12`<sup>Optional</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions.property.x12"></a>

```go
X12 B2BiTransformerOutputConversionFormatOptionsX12
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#x12 B2BiTransformer#x12}.

---

### B2BiTransformerOutputConversionFormatOptionsX12 <a name="B2BiTransformerOutputConversionFormatOptionsX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerOutputConversionFormatOptionsX12 {
	TransactionSet: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.transactionSet">TransactionSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}. |

---

##### `TransactionSet`<sup>Optional</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.transactionSet"></a>

```go
TransactionSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#transaction_set B2BiTransformer#transaction_set}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#version B2BiTransformer#version}.

---

### B2BiTransformerSampleDocuments <a name="B2BiTransformerSampleDocuments" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerSampleDocuments {
	BucketName: *string,
	Keys: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.bucketName">BucketName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#bucket_name B2BiTransformer#bucket_name}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.keys">Keys</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#keys B2BiTransformer#keys}. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#bucket_name B2BiTransformer#bucket_name}.

---

##### `Keys`<sup>Optional</sup> <a name="Keys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocuments.property.keys"></a>

```go
Keys interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#keys B2BiTransformer#keys}.

---

### B2BiTransformerSampleDocumentsKeys <a name="B2BiTransformerSampleDocumentsKeys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerSampleDocumentsKeys {
	Input: *string,
	Output: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.input">Input</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#input B2BiTransformer#input}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.output">Output</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#output B2BiTransformer#output}. |

---

##### `Input`<sup>Optional</sup> <a name="Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.input"></a>

```go
Input *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#input B2BiTransformer#input}.

---

##### `Output`<sup>Optional</sup> <a name="Output" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeys.property.output"></a>

```go
Output *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#output B2BiTransformer#output}.

---

### B2BiTransformerTags <a name="B2BiTransformerTags" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

&b2bitransformer.B2BiTransformerTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#key B2BiTransformer#key}. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#value B2BiTransformer#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#key B2BiTransformer#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/b2bi_transformer#value B2BiTransformer#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### B2BiTransformerEdiTypeOutputReference <a name="B2BiTransformerEdiTypeOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerEdiTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerEdiTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details">PutX12Details</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resetX12Details">ResetX12Details</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutX12Details` <a name="PutX12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details"></a>

```go
func PutX12Details(value B2BiTransformerEdiTypeX12Details)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.putX12Details.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12Details">B2BiTransformerEdiTypeX12Details</a>

---

##### `ResetX12Details` <a name="ResetX12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.resetX12Details"></a>

```go
func ResetX12Details()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12Details">X12Details</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference">B2BiTransformerEdiTypeX12DetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12DetailsInput">X12DetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `X12Details`<sup>Required</sup> <a name="X12Details" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12Details"></a>

```go
func X12Details() B2BiTransformerEdiTypeX12DetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference">B2BiTransformerEdiTypeX12DetailsOutputReference</a>

---

##### `X12DetailsInput`<sup>Optional</sup> <a name="X12DetailsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.x12DetailsInput"></a>

```go
func X12DetailsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerEdiTypeX12DetailsOutputReference <a name="B2BiTransformerEdiTypeX12DetailsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerEdiTypeX12DetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerEdiTypeX12DetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetTransactionSet">ResetTransactionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransactionSet` <a name="ResetTransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetTransactionSet"></a>

```go
func ResetTransactionSet()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSetInput">TransactionSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet">TransactionSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TransactionSetInput`<sup>Optional</sup> <a name="TransactionSetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSetInput"></a>

```go
func TransactionSetInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `TransactionSet`<sup>Required</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.transactionSet"></a>

```go
func TransactionSet() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerEdiTypeX12DetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionAdvancedOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionAdvancedOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerInputConversionAdvancedOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12">PutX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resetX12">ResetX12</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutX12` <a name="PutX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12"></a>

```go
func PutX12(value B2BiTransformerInputConversionAdvancedOptionsX12)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12">B2BiTransformerInputConversionAdvancedOptionsX12</a>

---

##### `ResetX12` <a name="ResetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.resetX12"></a>

```go
func ResetX12()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference">B2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12Input">X12Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `X12`<sup>Required</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12"></a>

```go
func X12() B2BiTransformerInputConversionAdvancedOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference">B2BiTransformerInputConversionAdvancedOptionsX12OutputReference</a>

---

##### `X12Input`<sup>Optional</sup> <a name="X12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.x12Input"></a>

```go
func X12Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionAdvancedOptionsX12OutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionAdvancedOptionsX12OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerInputConversionAdvancedOptionsX12OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions">PutSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions">PutValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetSplitOptions">ResetSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetValidationOptions">ResetValidationOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSplitOptions` <a name="PutSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions"></a>

```go
func PutSplitOptions(value B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putSplitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `PutValidationOptions` <a name="PutValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions"></a>

```go
func PutValidationOptions(value B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.putValidationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `ResetSplitOptions` <a name="ResetSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetSplitOptions"></a>

```go
func ResetSplitOptions()
```

##### `ResetValidationOptions` <a name="ResetValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.resetValidationOptions"></a>

```go
func ResetValidationOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions">SplitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions">ValidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput">SplitOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput">ValidationOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SplitOptions`<sup>Required</sup> <a name="SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```go
func SplitOptions() B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `ValidationOptions`<sup>Required</sup> <a name="ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```go
func ValidationOptions() B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `SplitOptionsInput`<sup>Optional</sup> <a name="SplitOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput"></a>

```go
func SplitOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidationOptionsInput`<sup>Optional</sup> <a name="ValidationOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput"></a>

```go
func ValidationOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy">ResetSplitBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSplitBy` <a name="ResetSplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy"></a>

```go
func ResetSplitBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput">SplitByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">SplitBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SplitByInput`<sup>Optional</sup> <a name="SplitByInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput"></a>

```go
func SplitByInput() *string
```

- *Type:* *string

---

##### `SplitBy`<sup>Required</sup> <a name="SplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```go
func SplitBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules">PutValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules">ResetValidationRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValidationRules` <a name="PutValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules"></a>

```go
func PutValidationRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetValidationRules` <a name="ResetValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules"></a>

```go
func ResetValidationRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">ValidationRules</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput">ValidationRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValidationRules`<sup>Required</sup> <a name="ValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```go
func ValidationRules() B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `ValidationRulesInput`<sup>Optional</sup> <a name="ValidationRulesInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput"></a>

```go
func ValidationRulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd">ResetCodesToAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove">ResetCodesToRemove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId">ResetElementId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCodesToAdd` <a name="ResetCodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd"></a>

```go
func ResetCodesToAdd()
```

##### `ResetCodesToRemove` <a name="ResetCodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove"></a>

```go
func ResetCodesToRemove()
```

##### `ResetElementId` <a name="ResetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId"></a>

```go
func ResetElementId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput">CodesToAddInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput">CodesToRemoveInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">CodesToAdd</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">CodesToRemove</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">ElementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodesToAddInput`<sup>Optional</sup> <a name="CodesToAddInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput"></a>

```go
func CodesToAddInput() *[]*string
```

- *Type:* *[]*string

---

##### `CodesToRemoveInput`<sup>Optional</sup> <a name="CodesToRemoveInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput"></a>

```go
func CodesToRemoveInput() *[]*string
```

- *Type:* *[]*string

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput"></a>

```go
func ElementIdInput() *string
```

- *Type:* *string

---

##### `CodesToAdd`<sup>Required</sup> <a name="CodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```go
func CodesToAdd() *[]*string
```

- *Type:* *[]*string

---

##### `CodesToRemove`<sup>Required</sup> <a name="CodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```go
func CodesToRemove() *[]*string
```

- *Type:* *[]*string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```go
func ElementId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId">ResetElementId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength">ResetMinLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetElementId` <a name="ResetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId"></a>

```go
func ResetElementId()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength"></a>

```go
func ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength"></a>

```go
func ResetMinLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput">MaxLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">ElementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">MaxLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput"></a>

```go
func ElementIdInput() *string
```

- *Type:* *string

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput"></a>

```go
func MaxLengthInput() *f64
```

- *Type:* *f64

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput"></a>

```go
func MinLengthInput() *f64
```

- *Type:* *f64

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```go
func ElementId() *string
```

- *Type:* *string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```go
func MaxLength() *f64
```

- *Type:* *f64

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition">ResetElementPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement">ResetRequirement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetElementPosition` <a name="ResetElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition"></a>

```go
func ResetElementPosition()
```

##### `ResetRequirement` <a name="ResetRequirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement"></a>

```go
func ResetRequirement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput">ElementPositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput">RequirementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">ElementPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">Requirement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElementPositionInput`<sup>Optional</sup> <a name="ElementPositionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput"></a>

```go
func ElementPositionInput() *string
```

- *Type:* *string

---

##### `RequirementInput`<sup>Optional</sup> <a name="RequirementInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput"></a>

```go
func RequirementInput() *string
```

- *Type:* *string

---

##### `ElementPosition`<sup>Required</sup> <a name="ElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```go
func ElementPosition() *string
```

- *Type:* *string

---

##### `Requirement`<sup>Required</sup> <a name="Requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```go
func Requirement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```go
func Get(index *f64) B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule">PutCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule">PutElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule">PutElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule">ResetCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule">ResetElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule">ResetElementRequirementValidationRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeListValidationRule` <a name="PutCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule"></a>

```go
func PutCodeListValidationRule(value B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `PutElementLengthValidationRule` <a name="PutElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule"></a>

```go
func PutElementLengthValidationRule(value B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `PutElementRequirementValidationRule` <a name="PutElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule"></a>

```go
func PutElementRequirementValidationRule(value B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `ResetCodeListValidationRule` <a name="ResetCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule"></a>

```go
func ResetCodeListValidationRule()
```

##### `ResetElementLengthValidationRule` <a name="ResetElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule"></a>

```go
func ResetElementLengthValidationRule()
```

##### `ResetElementRequirementValidationRule` <a name="ResetElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule"></a>

```go
func ResetElementRequirementValidationRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">CodeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">ElementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">ElementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput">CodeListValidationRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput">ElementLengthValidationRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput">ElementRequirementValidationRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeListValidationRule`<sup>Required</sup> <a name="CodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```go
func CodeListValidationRule() B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `ElementLengthValidationRule`<sup>Required</sup> <a name="ElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```go
func ElementLengthValidationRule() B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `ElementRequirementValidationRule`<sup>Required</sup> <a name="ElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```go
func ElementRequirementValidationRule() B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `CodeListValidationRuleInput`<sup>Optional</sup> <a name="CodeListValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput"></a>

```go
func CodeListValidationRuleInput() interface{}
```

- *Type:* interface{}

---

##### `ElementLengthValidationRuleInput`<sup>Optional</sup> <a name="ElementLengthValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput"></a>

```go
func ElementLengthValidationRuleInput() interface{}
```

- *Type:* interface{}

---

##### `ElementRequirementValidationRuleInput`<sup>Optional</sup> <a name="ElementRequirementValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput"></a>

```go
func ElementRequirementValidationRuleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionFormatOptionsOutputReference <a name="B2BiTransformerInputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionFormatOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerInputConversionFormatOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12">PutX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resetX12">ResetX12</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutX12` <a name="PutX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12"></a>

```go
func PutX12(value B2BiTransformerInputConversionFormatOptionsX12)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12">B2BiTransformerInputConversionFormatOptionsX12</a>

---

##### `ResetX12` <a name="ResetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.resetX12"></a>

```go
func ResetX12()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference">B2BiTransformerInputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12Input">X12Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `X12`<sup>Required</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12"></a>

```go
func X12() B2BiTransformerInputConversionFormatOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference">B2BiTransformerInputConversionFormatOptionsX12OutputReference</a>

---

##### `X12Input`<sup>Optional</sup> <a name="X12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.x12Input"></a>

```go
func X12Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionFormatOptionsX12OutputReference <a name="B2BiTransformerInputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionFormatOptionsX12OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerInputConversionFormatOptionsX12OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetTransactionSet">ResetTransactionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransactionSet` <a name="ResetTransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetTransactionSet"></a>

```go
func ResetTransactionSet()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSetInput">TransactionSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet">TransactionSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TransactionSetInput`<sup>Optional</sup> <a name="TransactionSetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSetInput"></a>

```go
func TransactionSetInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `TransactionSet`<sup>Required</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```go
func TransactionSet() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerInputConversionOutputReference <a name="B2BiTransformerInputConversionOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerInputConversionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerInputConversionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions">PutAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions">PutFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetAdvancedOptions">ResetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFormatOptions">ResetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFromFormat">ResetFromFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedOptions` <a name="PutAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions"></a>

```go
func PutAdvancedOptions(value B2BiTransformerInputConversionAdvancedOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putAdvancedOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptions">B2BiTransformerInputConversionAdvancedOptions</a>

---

##### `PutFormatOptions` <a name="PutFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions"></a>

```go
func PutFormatOptions(value B2BiTransformerInputConversionFormatOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptions">B2BiTransformerInputConversionFormatOptions</a>

---

##### `ResetAdvancedOptions` <a name="ResetAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetAdvancedOptions"></a>

```go
func ResetAdvancedOptions()
```

##### `ResetFormatOptions` <a name="ResetFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFormatOptions"></a>

```go
func ResetFormatOptions()
```

##### `ResetFromFormat` <a name="ResetFromFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.resetFromFormat"></a>

```go
func ResetFromFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptions">AdvancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference">B2BiTransformerInputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptionsInput">AdvancedOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptionsInput">FormatOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormatInput">FromFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormat">FromFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedOptions`<sup>Required</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptions"></a>

```go
func AdvancedOptions() B2BiTransformerInputConversionAdvancedOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionAdvancedOptionsOutputReference">B2BiTransformerInputConversionAdvancedOptionsOutputReference</a>

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptions"></a>

```go
func FormatOptions() B2BiTransformerInputConversionFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionFormatOptionsOutputReference">B2BiTransformerInputConversionFormatOptionsOutputReference</a>

---

##### `AdvancedOptionsInput`<sup>Optional</sup> <a name="AdvancedOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.advancedOptionsInput"></a>

```go
func AdvancedOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `FormatOptionsInput`<sup>Optional</sup> <a name="FormatOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.formatOptionsInput"></a>

```go
func FormatOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `FromFormatInput`<sup>Optional</sup> <a name="FromFormatInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormatInput"></a>

```go
func FromFormatInput() *string
```

- *Type:* *string

---

##### `FromFormat`<sup>Required</sup> <a name="FromFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.fromFormat"></a>

```go
func FromFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerInputConversionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerMappingOutputReference <a name="B2BiTransformerMappingOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplate">ResetTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplateLanguage">ResetTemplateLanguage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTemplate` <a name="ResetTemplate" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplate"></a>

```go
func ResetTemplate()
```

##### `ResetTemplateLanguage` <a name="ResetTemplateLanguage" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.resetTemplateLanguage"></a>

```go
func ResetTemplateLanguage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateInput">TemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguageInput">TemplateLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.template">Template</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguage">TemplateLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TemplateInput`<sup>Optional</sup> <a name="TemplateInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateInput"></a>

```go
func TemplateInput() *string
```

- *Type:* *string

---

##### `TemplateLanguageInput`<sup>Optional</sup> <a name="TemplateLanguageInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguageInput"></a>

```go
func TemplateLanguageInput() *string
```

- *Type:* *string

---

##### `Template`<sup>Required</sup> <a name="Template" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.template"></a>

```go
func Template() *string
```

- *Type:* *string

---

##### `TemplateLanguage`<sup>Required</sup> <a name="TemplateLanguage" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.templateLanguage"></a>

```go
func TemplateLanguage() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionAdvancedOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionAdvancedOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerOutputConversionAdvancedOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12">PutX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resetX12">ResetX12</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutX12` <a name="PutX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12"></a>

```go
func PutX12(value B2BiTransformerOutputConversionAdvancedOptionsX12)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12">B2BiTransformerOutputConversionAdvancedOptionsX12</a>

---

##### `ResetX12` <a name="ResetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.resetX12"></a>

```go
func ResetX12()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12Input">X12Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `X12`<sup>Required</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12"></a>

```go
func X12() B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference</a>

---

##### `X12Input`<sup>Optional</sup> <a name="X12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.x12Input"></a>

```go
func X12Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionAdvancedOptionsX12OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions">PutSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions">PutValidationOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetSplitOptions">ResetSplitOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetValidationOptions">ResetValidationOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSplitOptions` <a name="PutSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions"></a>

```go
func PutSplitOptions(value B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putSplitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptions</a>

---

##### `PutValidationOptions` <a name="PutValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions"></a>

```go
func PutValidationOptions(value B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.putValidationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptions</a>

---

##### `ResetSplitOptions` <a name="ResetSplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetSplitOptions"></a>

```go
func ResetSplitOptions()
```

##### `ResetValidationOptions` <a name="ResetValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.resetValidationOptions"></a>

```go
func ResetValidationOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions">SplitOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions">ValidationOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput">SplitOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput">ValidationOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SplitOptions`<sup>Required</sup> <a name="SplitOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptions"></a>

```go
func SplitOptions() B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference</a>

---

##### `ValidationOptions`<sup>Required</sup> <a name="ValidationOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptions"></a>

```go
func ValidationOptions() B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference</a>

---

##### `SplitOptionsInput`<sup>Optional</sup> <a name="SplitOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.splitOptionsInput"></a>

```go
func SplitOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ValidationOptionsInput`<sup>Optional</sup> <a name="ValidationOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.validationOptionsInput"></a>

```go
func ValidationOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy">ResetSplitBy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSplitBy` <a name="ResetSplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.resetSplitBy"></a>

```go
func ResetSplitBy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput">SplitByInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy">SplitBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SplitByInput`<sup>Optional</sup> <a name="SplitByInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitByInput"></a>

```go
func SplitByInput() *string
```

- *Type:* *string

---

##### `SplitBy`<sup>Required</sup> <a name="SplitBy" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.splitBy"></a>

```go
func SplitBy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12SplitOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules">PutValidationRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules">ResetValidationRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValidationRules` <a name="PutValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules"></a>

```go
func PutValidationRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.putValidationRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetValidationRules` <a name="ResetValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.resetValidationRules"></a>

```go
func ResetValidationRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules">ValidationRules</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput">ValidationRulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValidationRules`<sup>Required</sup> <a name="ValidationRules" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRules"></a>

```go
func ValidationRules() B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList</a>

---

##### `ValidationRulesInput`<sup>Optional</sup> <a name="ValidationRulesInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.validationRulesInput"></a>

```go
func ValidationRulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd">ResetCodesToAdd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove">ResetCodesToRemove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId">ResetElementId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCodesToAdd` <a name="ResetCodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToAdd"></a>

```go
func ResetCodesToAdd()
```

##### `ResetCodesToRemove` <a name="ResetCodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetCodesToRemove"></a>

```go
func ResetCodesToRemove()
```

##### `ResetElementId` <a name="ResetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.resetElementId"></a>

```go
func ResetElementId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput">CodesToAddInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput">CodesToRemoveInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd">CodesToAdd</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove">CodesToRemove</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId">ElementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodesToAddInput`<sup>Optional</sup> <a name="CodesToAddInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAddInput"></a>

```go
func CodesToAddInput() *[]*string
```

- *Type:* *[]*string

---

##### `CodesToRemoveInput`<sup>Optional</sup> <a name="CodesToRemoveInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemoveInput"></a>

```go
func CodesToRemoveInput() *[]*string
```

- *Type:* *[]*string

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementIdInput"></a>

```go
func ElementIdInput() *string
```

- *Type:* *string

---

##### `CodesToAdd`<sup>Required</sup> <a name="CodesToAdd" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToAdd"></a>

```go
func CodesToAdd() *[]*string
```

- *Type:* *[]*string

---

##### `CodesToRemove`<sup>Required</sup> <a name="CodesToRemove" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.codesToRemove"></a>

```go
func CodesToRemove() *[]*string
```

- *Type:* *[]*string

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.elementId"></a>

```go
func ElementId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId">ResetElementId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength">ResetMaxLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength">ResetMinLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetElementId` <a name="ResetElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetElementId"></a>

```go
func ResetElementId()
```

##### `ResetMaxLength` <a name="ResetMaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMaxLength"></a>

```go
func ResetMaxLength()
```

##### `ResetMinLength` <a name="ResetMinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.resetMinLength"></a>

```go
func ResetMinLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput">ElementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput">MaxLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput">MinLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId">ElementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength">MaxLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength">MinLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElementIdInput`<sup>Optional</sup> <a name="ElementIdInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementIdInput"></a>

```go
func ElementIdInput() *string
```

- *Type:* *string

---

##### `MaxLengthInput`<sup>Optional</sup> <a name="MaxLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLengthInput"></a>

```go
func MaxLengthInput() *f64
```

- *Type:* *f64

---

##### `MinLengthInput`<sup>Optional</sup> <a name="MinLengthInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLengthInput"></a>

```go
func MinLengthInput() *f64
```

- *Type:* *f64

---

##### `ElementId`<sup>Required</sup> <a name="ElementId" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.elementId"></a>

```go
func ElementId() *string
```

- *Type:* *string

---

##### `MaxLength`<sup>Required</sup> <a name="MaxLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.maxLength"></a>

```go
func MaxLength() *f64
```

- *Type:* *f64

---

##### `MinLength`<sup>Required</sup> <a name="MinLength" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.minLength"></a>

```go
func MinLength() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition">ResetElementPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement">ResetRequirement</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetElementPosition` <a name="ResetElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetElementPosition"></a>

```go
func ResetElementPosition()
```

##### `ResetRequirement` <a name="ResetRequirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.resetRequirement"></a>

```go
func ResetRequirement()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput">ElementPositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput">RequirementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition">ElementPosition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement">Requirement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ElementPositionInput`<sup>Optional</sup> <a name="ElementPositionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPositionInput"></a>

```go
func ElementPositionInput() *string
```

- *Type:* *string

---

##### `RequirementInput`<sup>Optional</sup> <a name="RequirementInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirementInput"></a>

```go
func RequirementInput() *string
```

- *Type:* *string

---

##### `ElementPosition`<sup>Required</sup> <a name="ElementPosition" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.elementPosition"></a>

```go
func ElementPosition() *string
```

- *Type:* *string

---

##### `Requirement`<sup>Required</sup> <a name="Requirement" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.requirement"></a>

```go
func Requirement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get"></a>

```go
func Get(index *f64) B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference <a name="B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule">PutCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule">PutElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule">PutElementRequirementValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule">ResetCodeListValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule">ResetElementLengthValidationRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule">ResetElementRequirementValidationRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCodeListValidationRule` <a name="PutCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule"></a>

```go
func PutCodeListValidationRule(value B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putCodeListValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRule</a>

---

##### `PutElementLengthValidationRule` <a name="PutElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule"></a>

```go
func PutElementLengthValidationRule(value B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementLengthValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRule</a>

---

##### `PutElementRequirementValidationRule` <a name="PutElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule"></a>

```go
func PutElementRequirementValidationRule(value B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.putElementRequirementValidationRule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRule</a>

---

##### `ResetCodeListValidationRule` <a name="ResetCodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetCodeListValidationRule"></a>

```go
func ResetCodeListValidationRule()
```

##### `ResetElementLengthValidationRule` <a name="ResetElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementLengthValidationRule"></a>

```go
func ResetElementLengthValidationRule()
```

##### `ResetElementRequirementValidationRule` <a name="ResetElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.resetElementRequirementValidationRule"></a>

```go
func ResetElementRequirementValidationRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule">CodeListValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule">ElementLengthValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule">ElementRequirementValidationRule</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput">CodeListValidationRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput">ElementLengthValidationRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput">ElementRequirementValidationRuleInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CodeListValidationRule`<sup>Required</sup> <a name="CodeListValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRule"></a>

```go
func CodeListValidationRule() B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesCodeListValidationRuleOutputReference</a>

---

##### `ElementLengthValidationRule`<sup>Required</sup> <a name="ElementLengthValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRule"></a>

```go
func ElementLengthValidationRule() B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementLengthValidationRuleOutputReference</a>

---

##### `ElementRequirementValidationRule`<sup>Required</sup> <a name="ElementRequirementValidationRule" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRule"></a>

```go
func ElementRequirementValidationRule() B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference">B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesElementRequirementValidationRuleOutputReference</a>

---

##### `CodeListValidationRuleInput`<sup>Optional</sup> <a name="CodeListValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.codeListValidationRuleInput"></a>

```go
func CodeListValidationRuleInput() interface{}
```

- *Type:* interface{}

---

##### `ElementLengthValidationRuleInput`<sup>Optional</sup> <a name="ElementLengthValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementLengthValidationRuleInput"></a>

```go
func ElementLengthValidationRuleInput() interface{}
```

- *Type:* interface{}

---

##### `ElementRequirementValidationRuleInput`<sup>Optional</sup> <a name="ElementRequirementValidationRuleInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.elementRequirementValidationRuleInput"></a>

```go
func ElementRequirementValidationRuleInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsX12ValidationOptionsValidationRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionFormatOptionsOutputReference <a name="B2BiTransformerOutputConversionFormatOptionsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionFormatOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerOutputConversionFormatOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12">PutX12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resetX12">ResetX12</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutX12` <a name="PutX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12"></a>

```go
func PutX12(value B2BiTransformerOutputConversionFormatOptionsX12)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.putX12.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12">B2BiTransformerOutputConversionFormatOptionsX12</a>

---

##### `ResetX12` <a name="ResetX12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.resetX12"></a>

```go
func ResetX12()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12">X12</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference">B2BiTransformerOutputConversionFormatOptionsX12OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12Input">X12Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `X12`<sup>Required</sup> <a name="X12" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12"></a>

```go
func X12() B2BiTransformerOutputConversionFormatOptionsX12OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference">B2BiTransformerOutputConversionFormatOptionsX12OutputReference</a>

---

##### `X12Input`<sup>Optional</sup> <a name="X12Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.x12Input"></a>

```go
func X12Input() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionFormatOptionsX12OutputReference <a name="B2BiTransformerOutputConversionFormatOptionsX12OutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionFormatOptionsX12OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerOutputConversionFormatOptionsX12OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetTransactionSet">ResetTransactionSet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTransactionSet` <a name="ResetTransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetTransactionSet"></a>

```go
func ResetTransactionSet()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSetInput">TransactionSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet">TransactionSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TransactionSetInput`<sup>Optional</sup> <a name="TransactionSetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSetInput"></a>

```go
func TransactionSetInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `TransactionSet`<sup>Required</sup> <a name="TransactionSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.transactionSet"></a>

```go
func TransactionSet() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsX12OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerOutputConversionOutputReference <a name="B2BiTransformerOutputConversionOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerOutputConversionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerOutputConversionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions">PutAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions">PutFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetAdvancedOptions">ResetAdvancedOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetFormatOptions">ResetFormatOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetToFormat">ResetToFormat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdvancedOptions` <a name="PutAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions"></a>

```go
func PutAdvancedOptions(value B2BiTransformerOutputConversionAdvancedOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putAdvancedOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptions">B2BiTransformerOutputConversionAdvancedOptions</a>

---

##### `PutFormatOptions` <a name="PutFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions"></a>

```go
func PutFormatOptions(value B2BiTransformerOutputConversionFormatOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.putFormatOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptions">B2BiTransformerOutputConversionFormatOptions</a>

---

##### `ResetAdvancedOptions` <a name="ResetAdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetAdvancedOptions"></a>

```go
func ResetAdvancedOptions()
```

##### `ResetFormatOptions` <a name="ResetFormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetFormatOptions"></a>

```go
func ResetFormatOptions()
```

##### `ResetToFormat` <a name="ResetToFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.resetToFormat"></a>

```go
func ResetToFormat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptions">AdvancedOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptions">FormatOptions</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference">B2BiTransformerOutputConversionFormatOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptionsInput">AdvancedOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptionsInput">FormatOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormatInput">ToFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormat">ToFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvancedOptions`<sup>Required</sup> <a name="AdvancedOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptions"></a>

```go
func AdvancedOptions() B2BiTransformerOutputConversionAdvancedOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionAdvancedOptionsOutputReference">B2BiTransformerOutputConversionAdvancedOptionsOutputReference</a>

---

##### `FormatOptions`<sup>Required</sup> <a name="FormatOptions" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptions"></a>

```go
func FormatOptions() B2BiTransformerOutputConversionFormatOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionFormatOptionsOutputReference">B2BiTransformerOutputConversionFormatOptionsOutputReference</a>

---

##### `AdvancedOptionsInput`<sup>Optional</sup> <a name="AdvancedOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.advancedOptionsInput"></a>

```go
func AdvancedOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `FormatOptionsInput`<sup>Optional</sup> <a name="FormatOptionsInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.formatOptionsInput"></a>

```go
func FormatOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `ToFormatInput`<sup>Optional</sup> <a name="ToFormatInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormatInput"></a>

```go
func ToFormatInput() *string
```

- *Type:* *string

---

##### `ToFormat`<sup>Required</sup> <a name="ToFormat" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.toFormat"></a>

```go
func ToFormat() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerOutputConversionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerSampleDocumentsKeysList <a name="B2BiTransformerSampleDocumentsKeysList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerSampleDocumentsKeysList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) B2BiTransformerSampleDocumentsKeysList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get"></a>

```go
func Get(index *f64) B2BiTransformerSampleDocumentsKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerSampleDocumentsKeysOutputReference <a name="B2BiTransformerSampleDocumentsKeysOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerSampleDocumentsKeysOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) B2BiTransformerSampleDocumentsKeysOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetInput">ResetInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetOutput">ResetOutput</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInput` <a name="ResetInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetInput"></a>

```go
func ResetInput()
```

##### `ResetOutput` <a name="ResetOutput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.resetOutput"></a>

```go
func ResetOutput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.inputInput">InputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.outputInput">OutputInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.input">Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.output">Output</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputInput`<sup>Optional</sup> <a name="InputInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.inputInput"></a>

```go
func InputInput() *string
```

- *Type:* *string

---

##### `OutputInput`<sup>Optional</sup> <a name="OutputInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.outputInput"></a>

```go
func OutputInput() *string
```

- *Type:* *string

---

##### `Input`<sup>Required</sup> <a name="Input" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.input"></a>

```go
func Input() *string
```

- *Type:* *string

---

##### `Output`<sup>Required</sup> <a name="Output" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.output"></a>

```go
func Output() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerSampleDocumentsOutputReference <a name="B2BiTransformerSampleDocumentsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerSampleDocumentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) B2BiTransformerSampleDocumentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys">PutKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetKeys">ResetKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutKeys` <a name="PutKeys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys"></a>

```go
func PutKeys(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.putKeys.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetKeys` <a name="ResetKeys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.resetKeys"></a>

```go
func ResetKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keys">Keys</a></code> | <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList">B2BiTransformerSampleDocumentsKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keysInput">KeysInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Keys`<sup>Required</sup> <a name="Keys" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keys"></a>

```go
func Keys() B2BiTransformerSampleDocumentsKeysList
```

- *Type:* <a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsKeysList">B2BiTransformerSampleDocumentsKeysList</a>

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `KeysInput`<sup>Optional</sup> <a name="KeysInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.keysInput"></a>

```go
func KeysInput() interface{}
```

- *Type:* interface{}

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerSampleDocumentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerTagsList <a name="B2BiTransformerTagsList" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) B2BiTransformerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get"></a>

```go
func Get(index *f64) B2BiTransformerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### B2BiTransformerTagsOutputReference <a name="B2BiTransformerTagsOutputReference" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/b2bitransformer"

b2bitransformer.NewB2BiTransformerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) B2BiTransformerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.b2BiTransformer.B2BiTransformerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



