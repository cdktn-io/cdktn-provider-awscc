# `cleanroomsAnalysisTemplate` Submodule <a name="`cleanroomsAnalysisTemplate` Submodule" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CleanroomsAnalysisTemplate <a name="CleanroomsAnalysisTemplate" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template awscc_cleanrooms_analysis_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplate(scope Construct, id *string, config CleanroomsAnalysisTemplateConfig) CleanroomsAnalysisTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig">CleanroomsAnalysisTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig">CleanroomsAnalysisTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putAnalysisParameters">PutAnalysisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putErrorMessageConfiguration">PutErrorMessageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSource">PutSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSourceMetadata">PutSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSyntheticDataParameters">PutSyntheticDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetAnalysisParameters">ResetAnalysisParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetErrorMessageConfiguration">ResetErrorMessageConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSourceMetadata">ResetSourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSyntheticDataParameters">ResetSyntheticDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnalysisParameters` <a name="PutAnalysisParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putAnalysisParameters"></a>

```go
func PutAnalysisParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putAnalysisParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutErrorMessageConfiguration` <a name="PutErrorMessageConfiguration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putErrorMessageConfiguration"></a>

```go
func PutErrorMessageConfiguration(value CleanroomsAnalysisTemplateErrorMessageConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putErrorMessageConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSchema"></a>

```go
func PutSchema(value CleanroomsAnalysisTemplateSchema)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a>

---

##### `PutSource` <a name="PutSource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSource"></a>

```go
func PutSource(value CleanroomsAnalysisTemplateSource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a>

---

##### `PutSourceMetadata` <a name="PutSourceMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSourceMetadata"></a>

```go
func PutSourceMetadata(value CleanroomsAnalysisTemplateSourceMetadata)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSourceMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a>

---

##### `PutSyntheticDataParameters` <a name="PutSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSyntheticDataParameters"></a>

```go
func PutSyntheticDataParameters(value CleanroomsAnalysisTemplateSyntheticDataParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putSyntheticDataParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAnalysisParameters` <a name="ResetAnalysisParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetAnalysisParameters"></a>

```go
func ResetAnalysisParameters()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetErrorMessageConfiguration` <a name="ResetErrorMessageConfiguration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetErrorMessageConfiguration"></a>

```go
func ResetErrorMessageConfiguration()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetSourceMetadata` <a name="ResetSourceMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSourceMetadata"></a>

```go
func ResetSourceMetadata()
```

##### `ResetSyntheticDataParameters` <a name="ResetSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetSyntheticDataParameters"></a>

```go
func ResetSyntheticDataParameters()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a CleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.CleanroomsAnalysisTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.CleanroomsAnalysisTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.CleanroomsAnalysisTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.CleanroomsAnalysisTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a CleanroomsAnalysisTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CleanroomsAnalysisTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CleanroomsAnalysisTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the CleanroomsAnalysisTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParameters">AnalysisParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList">CleanroomsAnalysisTemplateAnalysisParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisTemplateIdentifier">AnalysisTemplateIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationArn">CollaborationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationIdentifier">CollaborationIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfiguration">ErrorMessageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference">CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipArn">MembershipArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference">CleanroomsAnalysisTemplateSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference">CleanroomsAnalysisTemplateSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadata">SourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference">CleanroomsAnalysisTemplateSourceMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParameters">SyntheticDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList">CleanroomsAnalysisTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParametersInput">AnalysisParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfigurationInput">ErrorMessageConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifierInput">MembershipIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schemaInput">SchemaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceInput">SourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadataInput">SourceMetadataInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParametersInput">SyntheticDataParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AnalysisParameters`<sup>Required</sup> <a name="AnalysisParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParameters"></a>

```go
func AnalysisParameters() CleanroomsAnalysisTemplateAnalysisParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList">CleanroomsAnalysisTemplateAnalysisParametersList</a>

---

##### `AnalysisTemplateIdentifier`<sup>Required</sup> <a name="AnalysisTemplateIdentifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisTemplateIdentifier"></a>

```go
func AnalysisTemplateIdentifier() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CollaborationArn`<sup>Required</sup> <a name="CollaborationArn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationArn"></a>

```go
func CollaborationArn() *string
```

- *Type:* *string

---

##### `CollaborationIdentifier`<sup>Required</sup> <a name="CollaborationIdentifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.collaborationIdentifier"></a>

```go
func CollaborationIdentifier() *string
```

- *Type:* *string

---

##### `ErrorMessageConfiguration`<sup>Required</sup> <a name="ErrorMessageConfiguration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfiguration"></a>

```go
func ErrorMessageConfiguration() CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference">CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MembershipArn`<sup>Required</sup> <a name="MembershipArn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipArn"></a>

```go
func MembershipArn() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schema"></a>

```go
func Schema() CleanroomsAnalysisTemplateSchemaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference">CleanroomsAnalysisTemplateSchemaOutputReference</a>

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.source"></a>

```go
func Source() CleanroomsAnalysisTemplateSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference">CleanroomsAnalysisTemplateSourceOutputReference</a>

---

##### `SourceMetadata`<sup>Required</sup> <a name="SourceMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadata"></a>

```go
func SourceMetadata() CleanroomsAnalysisTemplateSourceMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference">CleanroomsAnalysisTemplateSourceMetadataOutputReference</a>

---

##### `SyntheticDataParameters`<sup>Required</sup> <a name="SyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParameters"></a>

```go
func SyntheticDataParameters() CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tags"></a>

```go
func Tags() CleanroomsAnalysisTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList">CleanroomsAnalysisTemplateTagsList</a>

---

##### `AnalysisParametersInput`<sup>Optional</sup> <a name="AnalysisParametersInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.analysisParametersInput"></a>

```go
func AnalysisParametersInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ErrorMessageConfigurationInput`<sup>Optional</sup> <a name="ErrorMessageConfigurationInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.errorMessageConfigurationInput"></a>

```go
func ErrorMessageConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `MembershipIdentifierInput`<sup>Optional</sup> <a name="MembershipIdentifierInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifierInput"></a>

```go
func MembershipIdentifierInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.schemaInput"></a>

```go
func SchemaInput() interface{}
```

- *Type:* interface{}

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceInput"></a>

```go
func SourceInput() interface{}
```

- *Type:* interface{}

---

##### `SourceMetadataInput`<sup>Optional</sup> <a name="SourceMetadataInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.sourceMetadataInput"></a>

```go
func SourceMetadataInput() interface{}
```

- *Type:* interface{}

---

##### `SyntheticDataParametersInput`<sup>Optional</sup> <a name="SyntheticDataParametersInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.syntheticDataParametersInput"></a>

```go
func SyntheticDataParametersInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.membershipIdentifier"></a>

```go
func MembershipIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CleanroomsAnalysisTemplateAnalysisParameters <a name="CleanroomsAnalysisTemplateAnalysisParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateAnalysisParameters {
	DefaultValue: *string,
	Name: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#default_value CleanroomsAnalysisTemplate#default_value}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}. |

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#default_value CleanroomsAnalysisTemplate#default_value}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParameters.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}.

---

### CleanroomsAnalysisTemplateConfig <a name="CleanroomsAnalysisTemplateConfig" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Format: *string,
	MembershipIdentifier: *string,
	Name: *string,
	Source: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource,
	AnalysisParameters: interface{},
	Description: *string,
	ErrorMessageConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration,
	Schema: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema,
	SourceMetadata: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata,
	SyntheticDataParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.format">Format</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#format CleanroomsAnalysisTemplate#format}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.membershipIdentifier">MembershipIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#membership_identifier CleanroomsAnalysisTemplate#membership_identifier}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.source">Source</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#source CleanroomsAnalysisTemplate#source}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.analysisParameters">AnalysisParameters</a></code> | <code>interface{}</code> | The member who can query can provide this placeholder for a literal data value in an analysis template. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#description CleanroomsAnalysisTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.errorMessageConfiguration">ErrorMessageConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#error_message_configuration CleanroomsAnalysisTemplate#error_message_configuration}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#schema CleanroomsAnalysisTemplate#schema}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.sourceMetadata">SourceMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#source_metadata CleanroomsAnalysisTemplate#source_metadata}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.syntheticDataParameters">SyntheticDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#synthetic_data_parameters CleanroomsAnalysisTemplate#synthetic_data_parameters}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.format"></a>

```go
Format *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#format CleanroomsAnalysisTemplate#format}.

---

##### `MembershipIdentifier`<sup>Required</sup> <a name="MembershipIdentifier" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.membershipIdentifier"></a>

```go
MembershipIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#membership_identifier CleanroomsAnalysisTemplate#membership_identifier}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#name CleanroomsAnalysisTemplate#name}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.source"></a>

```go
Source CleanroomsAnalysisTemplateSource
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource">CleanroomsAnalysisTemplateSource</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#source CleanroomsAnalysisTemplate#source}.

---

##### `AnalysisParameters`<sup>Optional</sup> <a name="AnalysisParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.analysisParameters"></a>

```go
AnalysisParameters interface{}
```

- *Type:* interface{}

The member who can query can provide this placeholder for a literal data value in an analysis template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#analysis_parameters CleanroomsAnalysisTemplate#analysis_parameters}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#description CleanroomsAnalysisTemplate#description}.

---

##### `ErrorMessageConfiguration`<sup>Optional</sup> <a name="ErrorMessageConfiguration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.errorMessageConfiguration"></a>

```go
ErrorMessageConfiguration CleanroomsAnalysisTemplateErrorMessageConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration">CleanroomsAnalysisTemplateErrorMessageConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#error_message_configuration CleanroomsAnalysisTemplate#error_message_configuration}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.schema"></a>

```go
Schema CleanroomsAnalysisTemplateSchema
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema">CleanroomsAnalysisTemplateSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#schema CleanroomsAnalysisTemplate#schema}.

---

##### `SourceMetadata`<sup>Optional</sup> <a name="SourceMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.sourceMetadata"></a>

```go
SourceMetadata CleanroomsAnalysisTemplateSourceMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata">CleanroomsAnalysisTemplateSourceMetadata</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#source_metadata CleanroomsAnalysisTemplate#source_metadata}.

---

##### `SyntheticDataParameters`<sup>Optional</sup> <a name="SyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.syntheticDataParameters"></a>

```go
SyntheticDataParameters CleanroomsAnalysisTemplateSyntheticDataParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#synthetic_data_parameters CleanroomsAnalysisTemplate#synthetic_data_parameters}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An arbitrary set of tags (key-value pairs) for this cleanrooms analysis template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#tags CleanroomsAnalysisTemplate#tags}

---

### CleanroomsAnalysisTemplateErrorMessageConfiguration <a name="CleanroomsAnalysisTemplateErrorMessageConfiguration" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}. |

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfiguration.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#type CleanroomsAnalysisTemplate#type}.

---

### CleanroomsAnalysisTemplateSchema <a name="CleanroomsAnalysisTemplateSchema" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSchema {
	ReferencedTables: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema.property.referencedTables">ReferencedTables</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#referenced_tables CleanroomsAnalysisTemplate#referenced_tables}. |

---

##### `ReferencedTables`<sup>Optional</sup> <a name="ReferencedTables" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchema.property.referencedTables"></a>

```go
ReferencedTables *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#referenced_tables CleanroomsAnalysisTemplate#referenced_tables}.

---

### CleanroomsAnalysisTemplateSource <a name="CleanroomsAnalysisTemplateSource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSource {
	Artifacts: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts,
	Text: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#text CleanroomsAnalysisTemplate#text}. |

---

##### `Artifacts`<sup>Optional</sup> <a name="Artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.artifacts"></a>

```go
Artifacts CleanroomsAnalysisTemplateSourceArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSource.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#text CleanroomsAnalysisTemplate#text}.

---

### CleanroomsAnalysisTemplateSourceArtifacts <a name="CleanroomsAnalysisTemplateSourceArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSourceArtifacts {
	AdditionalArtifacts: interface{},
	EntryPoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.additionalArtifacts">AdditionalArtifacts</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#additional_artifacts CleanroomsAnalysisTemplate#additional_artifacts}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.entryPoint">EntryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#entry_point CleanroomsAnalysisTemplate#entry_point}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#role_arn CleanroomsAnalysisTemplate#role_arn}. |

---

##### `AdditionalArtifacts`<sup>Optional</sup> <a name="AdditionalArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.additionalArtifacts"></a>

```go
AdditionalArtifacts interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#additional_artifacts CleanroomsAnalysisTemplate#additional_artifacts}.

---

##### `EntryPoint`<sup>Optional</sup> <a name="EntryPoint" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.entryPoint"></a>

```go
EntryPoint CleanroomsAnalysisTemplateSourceArtifactsEntryPoint
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#entry_point CleanroomsAnalysisTemplate#entry_point}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#role_arn CleanroomsAnalysisTemplate#role_arn}.

---

### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts {
	Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifacts.property.location"></a>

```go
Location CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}.

---

### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation {
	Bucket: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}.

---

### CleanroomsAnalysisTemplateSourceArtifactsEntryPoint <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPoint" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint {
	Location: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}. |

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint.property.location"></a>

```go
Location CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#location CleanroomsAnalysisTemplate#location}.

---

### CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation {
	Bucket: *string,
	Key: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#bucket CleanroomsAnalysisTemplate#bucket}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}.

---

### CleanroomsAnalysisTemplateSourceMetadata <a name="CleanroomsAnalysisTemplateSourceMetadata" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSourceMetadata {
	Artifacts: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}. |

---

##### `Artifacts`<sup>Optional</sup> <a name="Artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadata.property.artifacts"></a>

```go
Artifacts CleanroomsAnalysisTemplateSourceMetadataArtifacts
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#artifacts CleanroomsAnalysisTemplate#artifacts}.

---

### CleanroomsAnalysisTemplateSourceMetadataArtifacts <a name="CleanroomsAnalysisTemplateSourceMetadataArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts {
	AdditionalArtifactHashes: interface{},
	EntryPointHash: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.additionalArtifactHashes">AdditionalArtifactHashes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#additional_artifact_hashes CleanroomsAnalysisTemplate#additional_artifact_hashes}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.entryPointHash">EntryPointHash</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#entry_point_hash CleanroomsAnalysisTemplate#entry_point_hash}. |

---

##### `AdditionalArtifactHashes`<sup>Optional</sup> <a name="AdditionalArtifactHashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.additionalArtifactHashes"></a>

```go
AdditionalArtifactHashes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#additional_artifact_hashes CleanroomsAnalysisTemplate#additional_artifact_hashes}.

---

##### `EntryPointHash`<sup>Optional</sup> <a name="EntryPointHash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts.property.entryPointHash"></a>

```go
EntryPointHash CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#entry_point_hash CleanroomsAnalysisTemplate#entry_point_hash}.

---

### CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes {
	Sha256: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes.property.sha256">Sha256</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}. |

---

##### `Sha256`<sup>Optional</sup> <a name="Sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashes.property.sha256"></a>

```go
Sha256 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}.

---

### CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash {
	Sha256: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash.property.sha256">Sha256</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}. |

---

##### `Sha256`<sup>Optional</sup> <a name="Sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash.property.sha256"></a>

```go
Sha256 *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#sha_256 CleanroomsAnalysisTemplate#sha_256}.

---

### CleanroomsAnalysisTemplateSyntheticDataParameters <a name="CleanroomsAnalysisTemplateSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSyntheticDataParameters {
	MlSyntheticDataParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters.property.mlSyntheticDataParameters">MlSyntheticDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#ml_synthetic_data_parameters CleanroomsAnalysisTemplate#ml_synthetic_data_parameters}. |

---

##### `MlSyntheticDataParameters`<sup>Optional</sup> <a name="MlSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParameters.property.mlSyntheticDataParameters"></a>

```go
MlSyntheticDataParameters CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#ml_synthetic_data_parameters CleanroomsAnalysisTemplate#ml_synthetic_data_parameters}.

---

### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters {
	ColumnClassification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification,
	Epsilon: *f64,
	MaxMembershipInferenceAttackScore: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.columnClassification">ColumnClassification</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#column_classification CleanroomsAnalysisTemplate#column_classification}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.epsilon">Epsilon</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#epsilon CleanroomsAnalysisTemplate#epsilon}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.maxMembershipInferenceAttackScore">MaxMembershipInferenceAttackScore</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#max_membership_inference_attack_score CleanroomsAnalysisTemplate#max_membership_inference_attack_score}. |

---

##### `ColumnClassification`<sup>Optional</sup> <a name="ColumnClassification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.columnClassification"></a>

```go
ColumnClassification CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#column_classification CleanroomsAnalysisTemplate#column_classification}.

---

##### `Epsilon`<sup>Optional</sup> <a name="Epsilon" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.epsilon"></a>

```go
Epsilon *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#epsilon CleanroomsAnalysisTemplate#epsilon}.

---

##### `MaxMembershipInferenceAttackScore`<sup>Optional</sup> <a name="MaxMembershipInferenceAttackScore" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters.property.maxMembershipInferenceAttackScore"></a>

```go
MaxMembershipInferenceAttackScore *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#max_membership_inference_attack_score CleanroomsAnalysisTemplate#max_membership_inference_attack_score}.

---

### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification {
	ColumnMapping: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification.property.columnMapping">ColumnMapping</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#column_mapping CleanroomsAnalysisTemplate#column_mapping}. |

---

##### `ColumnMapping`<sup>Optional</sup> <a name="ColumnMapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification.property.columnMapping"></a>

```go
ColumnMapping interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#column_mapping CleanroomsAnalysisTemplate#column_mapping}.

---

### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping {
	ColumnName: *string,
	ColumnType: *string,
	IsPredictiveValue: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnName">ColumnName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#column_name CleanroomsAnalysisTemplate#column_name}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnType">ColumnType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#column_type CleanroomsAnalysisTemplate#column_type}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.isPredictiveValue">IsPredictiveValue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#is_predictive_value CleanroomsAnalysisTemplate#is_predictive_value}. |

---

##### `ColumnName`<sup>Optional</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnName"></a>

```go
ColumnName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#column_name CleanroomsAnalysisTemplate#column_name}.

---

##### `ColumnType`<sup>Optional</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.columnType"></a>

```go
ColumnType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#column_type CleanroomsAnalysisTemplate#column_type}.

---

##### `IsPredictiveValue`<sup>Optional</sup> <a name="IsPredictiveValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMapping.property.isPredictiveValue"></a>

```go
IsPredictiveValue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#is_predictive_value CleanroomsAnalysisTemplate#is_predictive_value}.

---

### CleanroomsAnalysisTemplateTags <a name="CleanroomsAnalysisTemplateTags" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

&cleanroomsanalysistemplate.CleanroomsAnalysisTemplateTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#value CleanroomsAnalysisTemplate#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#key CleanroomsAnalysisTemplate#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/cleanrooms_analysis_template#value CleanroomsAnalysisTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CleanroomsAnalysisTemplateAnalysisParametersList <a name="CleanroomsAnalysisTemplateAnalysisParametersList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateAnalysisParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsAnalysisTemplateAnalysisParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.get"></a>

```go
func Get(index *f64) CleanroomsAnalysisTemplateAnalysisParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateAnalysisParametersOutputReference <a name="CleanroomsAnalysisTemplateAnalysisParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateAnalysisParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsAnalysisTemplateAnalysisParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateAnalysisParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference <a name="CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateErrorMessageConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSchemaOutputReference <a name="CleanroomsAnalysisTemplateSchemaOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resetReferencedTables">ResetReferencedTables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetReferencedTables` <a name="ResetReferencedTables" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.resetReferencedTables"></a>

```go
func ResetReferencedTables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTablesInput">ReferencedTablesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTables">ReferencedTables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ReferencedTablesInput`<sup>Optional</sup> <a name="ReferencedTablesInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTablesInput"></a>

```go
func ReferencedTablesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ReferencedTables`<sup>Required</sup> <a name="ReferencedTables" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.referencedTables"></a>

```go
func ReferencedTables() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get"></a>

```go
func Get(index *f64) CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.resetKey"></a>

```go
func ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.putLocation"></a>

```go
func PutLocation(value CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocation</a>

---

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.resetLocation"></a>

```go
func ResetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.locationInput">LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.location"></a>

```go
func Location() CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsLocationOutputReference</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.locationInput"></a>

```go
func LocationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetKey">ResetKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetBucket"></a>

```go
func ResetBucket()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.resetKey"></a>

```go
func ResetKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.putLocation"></a>

```go
func PutLocation(value CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocation</a>

---

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.resetLocation"></a>

```go
func ResetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.locationInput">LocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.location"></a>

```go
func Location() CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointLocationOutputReference</a>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.locationInput"></a>

```go
func LocationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceArtifactsOutputReference <a name="CleanroomsAnalysisTemplateSourceArtifactsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSourceArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putAdditionalArtifacts">PutAdditionalArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putEntryPoint">PutEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetAdditionalArtifacts">ResetAdditionalArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetEntryPoint">ResetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalArtifacts` <a name="PutAdditionalArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putAdditionalArtifacts"></a>

```go
func PutAdditionalArtifacts(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putAdditionalArtifacts.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEntryPoint` <a name="PutEntryPoint" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putEntryPoint"></a>

```go
func PutEntryPoint(value CleanroomsAnalysisTemplateSourceArtifactsEntryPoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.putEntryPoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPoint">CleanroomsAnalysisTemplateSourceArtifactsEntryPoint</a>

---

##### `ResetAdditionalArtifacts` <a name="ResetAdditionalArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetAdditionalArtifacts"></a>

```go
func ResetAdditionalArtifacts()
```

##### `ResetEntryPoint` <a name="ResetEntryPoint" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetEntryPoint"></a>

```go
func ResetEntryPoint()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifacts">AdditionalArtifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPoint">EntryPoint</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifactsInput">AdditionalArtifactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPointInput">EntryPointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalArtifacts`<sup>Required</sup> <a name="AdditionalArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifacts"></a>

```go
func AdditionalArtifacts() CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList">CleanroomsAnalysisTemplateSourceArtifactsAdditionalArtifactsList</a>

---

##### `EntryPoint`<sup>Required</sup> <a name="EntryPoint" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPoint"></a>

```go
func EntryPoint() CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference">CleanroomsAnalysisTemplateSourceArtifactsEntryPointOutputReference</a>

---

##### `AdditionalArtifactsInput`<sup>Optional</sup> <a name="AdditionalArtifactsInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.additionalArtifactsInput"></a>

```go
func AdditionalArtifactsInput() interface{}
```

- *Type:* interface{}

---

##### `EntryPointInput`<sup>Optional</sup> <a name="EntryPointInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.entryPointInput"></a>

```go
func EntryPointInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get"></a>

```go
func Get(index *f64) CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resetSha256">ResetSha256</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSha256` <a name="ResetSha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.resetSha256"></a>

```go
func ResetSha256()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256Input">Sha256Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sha256Input`<sup>Optional</sup> <a name="Sha256Input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256Input"></a>

```go
func Sha256Input() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resetSha256">ResetSha256</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSha256` <a name="ResetSha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.resetSha256"></a>

```go
func ResetSha256()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256Input">Sha256Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256">Sha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Sha256Input`<sup>Optional</sup> <a name="Sha256Input" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256Input"></a>

```go
func Sha256Input() *string
```

- *Type:* *string

---

##### `Sha256`<sup>Required</sup> <a name="Sha256" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.sha256"></a>

```go
func Sha256() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putAdditionalArtifactHashes">PutAdditionalArtifactHashes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putEntryPointHash">PutEntryPointHash</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetAdditionalArtifactHashes">ResetAdditionalArtifactHashes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetEntryPointHash">ResetEntryPointHash</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalArtifactHashes` <a name="PutAdditionalArtifactHashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putAdditionalArtifactHashes"></a>

```go
func PutAdditionalArtifactHashes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putAdditionalArtifactHashes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutEntryPointHash` <a name="PutEntryPointHash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putEntryPointHash"></a>

```go
func PutEntryPointHash(value CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.putEntryPointHash.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHash</a>

---

##### `ResetAdditionalArtifactHashes` <a name="ResetAdditionalArtifactHashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetAdditionalArtifactHashes"></a>

```go
func ResetAdditionalArtifactHashes()
```

##### `ResetEntryPointHash` <a name="ResetEntryPointHash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.resetEntryPointHash"></a>

```go
func ResetEntryPointHash()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashes">AdditionalArtifactHashes</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHash">EntryPointHash</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashesInput">AdditionalArtifactHashesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHashInput">EntryPointHashInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalArtifactHashes`<sup>Required</sup> <a name="AdditionalArtifactHashes" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashes"></a>

```go
func AdditionalArtifactHashes() CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList">CleanroomsAnalysisTemplateSourceMetadataArtifactsAdditionalArtifactHashesList</a>

---

##### `EntryPointHash`<sup>Required</sup> <a name="EntryPointHash" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHash"></a>

```go
func EntryPointHash() CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsEntryPointHashOutputReference</a>

---

##### `AdditionalArtifactHashesInput`<sup>Optional</sup> <a name="AdditionalArtifactHashesInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.additionalArtifactHashesInput"></a>

```go
func AdditionalArtifactHashesInput() interface{}
```

- *Type:* interface{}

---

##### `EntryPointHashInput`<sup>Optional</sup> <a name="EntryPointHashInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.entryPointHashInput"></a>

```go
func EntryPointHashInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceMetadataOutputReference <a name="CleanroomsAnalysisTemplateSourceMetadataOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSourceMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.putArtifacts">PutArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resetArtifacts">ResetArtifacts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArtifacts` <a name="PutArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.putArtifacts"></a>

```go
func PutArtifacts(value CleanroomsAnalysisTemplateSourceMetadataArtifacts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.putArtifacts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifacts">CleanroomsAnalysisTemplateSourceMetadataArtifacts</a>

---

##### `ResetArtifacts` <a name="ResetArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.resetArtifacts"></a>

```go
func ResetArtifacts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifactsInput">ArtifactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifacts"></a>

```go
func Artifacts() CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference">CleanroomsAnalysisTemplateSourceMetadataArtifactsOutputReference</a>

---

##### `ArtifactsInput`<sup>Optional</sup> <a name="ArtifactsInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.artifactsInput"></a>

```go
func ArtifactsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSourceOutputReference <a name="CleanroomsAnalysisTemplateSourceOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.putArtifacts">PutArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetArtifacts">ResetArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetText">ResetText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutArtifacts` <a name="PutArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.putArtifacts"></a>

```go
func PutArtifacts(value CleanroomsAnalysisTemplateSourceArtifacts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.putArtifacts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifacts">CleanroomsAnalysisTemplateSourceArtifacts</a>

---

##### `ResetArtifacts` <a name="ResetArtifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetArtifacts"></a>

```go
func ResetArtifacts()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.resetText"></a>

```go
func ResetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifacts">Artifacts</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference">CleanroomsAnalysisTemplateSourceArtifactsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifactsInput">ArtifactsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Artifacts`<sup>Required</sup> <a name="Artifacts" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifacts"></a>

```go
func Artifacts() CleanroomsAnalysisTemplateSourceArtifactsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceArtifactsOutputReference">CleanroomsAnalysisTemplateSourceArtifactsOutputReference</a>

---

##### `ArtifactsInput`<sup>Optional</sup> <a name="ArtifactsInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.artifactsInput"></a>

```go
func ArtifactsInput() interface{}
```

- *Type:* interface{}

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get"></a>

```go
func Get(index *f64) CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnName">ResetColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnType">ResetColumnType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetIsPredictiveValue">ResetIsPredictiveValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetColumnName` <a name="ResetColumnName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnName"></a>

```go
func ResetColumnName()
```

##### `ResetColumnType` <a name="ResetColumnType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetColumnType"></a>

```go
func ResetColumnType()
```

##### `ResetIsPredictiveValue` <a name="ResetIsPredictiveValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.resetIsPredictiveValue"></a>

```go
func ResetIsPredictiveValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnNameInput">ColumnNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnTypeInput">ColumnTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValueInput">IsPredictiveValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnName">ColumnName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnType">ColumnType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValue">IsPredictiveValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnNameInput`<sup>Optional</sup> <a name="ColumnNameInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnNameInput"></a>

```go
func ColumnNameInput() *string
```

- *Type:* *string

---

##### `ColumnTypeInput`<sup>Optional</sup> <a name="ColumnTypeInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnTypeInput"></a>

```go
func ColumnTypeInput() *string
```

- *Type:* *string

---

##### `IsPredictiveValueInput`<sup>Optional</sup> <a name="IsPredictiveValueInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValueInput"></a>

```go
func IsPredictiveValueInput() interface{}
```

- *Type:* interface{}

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnName"></a>

```go
func ColumnName() *string
```

- *Type:* *string

---

##### `ColumnType`<sup>Required</sup> <a name="ColumnType" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.columnType"></a>

```go
func ColumnType() *string
```

- *Type:* *string

---

##### `IsPredictiveValue`<sup>Required</sup> <a name="IsPredictiveValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.isPredictiveValue"></a>

```go
func IsPredictiveValue() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.putColumnMapping">PutColumnMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resetColumnMapping">ResetColumnMapping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnMapping` <a name="PutColumnMapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.putColumnMapping"></a>

```go
func PutColumnMapping(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.putColumnMapping.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetColumnMapping` <a name="ResetColumnMapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.resetColumnMapping"></a>

```go
func ResetColumnMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMapping">ColumnMapping</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMappingInput">ColumnMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnMapping`<sup>Required</sup> <a name="ColumnMapping" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMapping"></a>

```go
func ColumnMapping() CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationColumnMappingList</a>

---

##### `ColumnMappingInput`<sup>Optional</sup> <a name="ColumnMappingInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.columnMappingInput"></a>

```go
func ColumnMappingInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.putColumnClassification">PutColumnClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetColumnClassification">ResetColumnClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetEpsilon">ResetEpsilon</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetMaxMembershipInferenceAttackScore">ResetMaxMembershipInferenceAttackScore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumnClassification` <a name="PutColumnClassification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.putColumnClassification"></a>

```go
func PutColumnClassification(value CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.putColumnClassification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassification</a>

---

##### `ResetColumnClassification` <a name="ResetColumnClassification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetColumnClassification"></a>

```go
func ResetColumnClassification()
```

##### `ResetEpsilon` <a name="ResetEpsilon" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetEpsilon"></a>

```go
func ResetEpsilon()
```

##### `ResetMaxMembershipInferenceAttackScore` <a name="ResetMaxMembershipInferenceAttackScore" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.resetMaxMembershipInferenceAttackScore"></a>

```go
func ResetMaxMembershipInferenceAttackScore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassification">ColumnClassification</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassificationInput">ColumnClassificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilonInput">EpsilonInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScoreInput">MaxMembershipInferenceAttackScoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilon">Epsilon</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScore">MaxMembershipInferenceAttackScore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnClassification`<sup>Required</sup> <a name="ColumnClassification" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassification"></a>

```go
func ColumnClassification() CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersColumnClassificationOutputReference</a>

---

##### `ColumnClassificationInput`<sup>Optional</sup> <a name="ColumnClassificationInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.columnClassificationInput"></a>

```go
func ColumnClassificationInput() interface{}
```

- *Type:* interface{}

---

##### `EpsilonInput`<sup>Optional</sup> <a name="EpsilonInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilonInput"></a>

```go
func EpsilonInput() *f64
```

- *Type:* *f64

---

##### `MaxMembershipInferenceAttackScoreInput`<sup>Optional</sup> <a name="MaxMembershipInferenceAttackScoreInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScoreInput"></a>

```go
func MaxMembershipInferenceAttackScoreInput() *f64
```

- *Type:* *f64

---

##### `Epsilon`<sup>Required</sup> <a name="Epsilon" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.epsilon"></a>

```go
func Epsilon() *f64
```

- *Type:* *f64

---

##### `MaxMembershipInferenceAttackScore`<sup>Required</sup> <a name="MaxMembershipInferenceAttackScore" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.maxMembershipInferenceAttackScore"></a>

```go
func MaxMembershipInferenceAttackScore() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference <a name="CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateSyntheticDataParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.putMlSyntheticDataParameters">PutMlSyntheticDataParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resetMlSyntheticDataParameters">ResetMlSyntheticDataParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMlSyntheticDataParameters` <a name="PutMlSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.putMlSyntheticDataParameters"></a>

```go
func PutMlSyntheticDataParameters(value CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.putMlSyntheticDataParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParameters</a>

---

##### `ResetMlSyntheticDataParameters` <a name="ResetMlSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.resetMlSyntheticDataParameters"></a>

```go
func ResetMlSyntheticDataParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParameters">MlSyntheticDataParameters</a></code> | <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParametersInput">MlSyntheticDataParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MlSyntheticDataParameters`<sup>Required</sup> <a name="MlSyntheticDataParameters" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParameters"></a>

```go
func MlSyntheticDataParameters() CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference">CleanroomsAnalysisTemplateSyntheticDataParametersMlSyntheticDataParametersOutputReference</a>

---

##### `MlSyntheticDataParametersInput`<sup>Optional</sup> <a name="MlSyntheticDataParametersInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.mlSyntheticDataParametersInput"></a>

```go
func MlSyntheticDataParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateSyntheticDataParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateTagsList <a name="CleanroomsAnalysisTemplateTagsList" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CleanroomsAnalysisTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.get"></a>

```go
func Get(index *f64) CleanroomsAnalysisTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### CleanroomsAnalysisTemplateTagsOutputReference <a name="CleanroomsAnalysisTemplateTagsOutputReference" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/cleanroomsanalysistemplate"

cleanroomsanalysistemplate.NewCleanroomsAnalysisTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CleanroomsAnalysisTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.cleanroomsAnalysisTemplate.CleanroomsAnalysisTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



